from flask import Flask, Blueprint, session, request, flash, jsonify
from methods import getUrl, random_generator
from flask_pymongo import PyMongo
import stripe, datetime, os
from model.user import User
from model.db import Db


payment = Blueprint('payment', __name__, template_folder='templates')


@payment.route("/config")
def get_publishable_key():
  
  stripe_config = {"publicKey": os.environ.get('STRIPE_KEYS_PUBLISHABLE_KEY')}
  return jsonify(stripe_config)

@payment.route("/create-checkout-session")
def create_checkout_session():
  if "username" in session:
    domain_url = os.environ.get('DOMAIN_URL')
    stripe.api_key = os.environ.get('STRIPE_KEYS_SECRET_KEY')
    try:
      # ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
      checkout_session = stripe.checkout.Session.create(
        success_url=domain_url + "success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url=domain_url + "cancelled",
        payment_method_types=["card"],
        line_items=[{
          'price': 'price_1MTXM0DBJLIO5ffwkhlfyPmR',
          'quantity': 1,
        }],
        metadata={
        },
        mode='subscription',
        client_reference_id=session["username"],
      )

      #Salvando sessionId no banco 
      newUser = {"sessionId": checkout_session["id"]} 
      Db.update_user(session["username"], newUser)

      return jsonify({"sessionId": checkout_session["id"]})
       
    except Exception as e:
      print(e)
      return jsonify(error=str(e)), 403
  else:
    return getUrl("login.html")

@payment.route("/webhook", methods=['POST'])
def stripe_webhook():
    payload = request.get_data(as_text=True)
    sig_header = request.headers.get('Stripe-Signature')

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, os.environ.get('STRIPE_KEYS_WEBHOOK'))
    except ValueError as e:
        # Invalid payload
        print(f"Invalid payload == {e} ")
        return "Invalid payload", 400
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        print(f"Invalid signature == {e} ")
        return "Invalid signature", 400

    # Se for a primeira compra add 20 converções puxando pela sessaoId
    if event.type == "checkout.session.completed":
        session = event.data.object
        client_reference_id = session.client_reference_id

        user = Db.get_name(client_reference_id)

        conversions = user.data['count']
        conversions += 20

        Db.update_user(
            client_reference_id,
            {"count": conversions}
        )

    # Após realizar pagamento add 20 converções puxando pelo emailPayment
    if event.type == "invoice.paid":
      email = event.data.object.customer_email
      user_found = Db.get_emailPayment(email)
      user = user_found.data

      sun = user['count'] + 20
      save = Db.update_user(user['name'], {'count': sun })

      if not save.ok:
        print(f'Erro no banco de dados ** Arquivo payment.py ** linha 92 **erro--> {save.message}')
      
    return "Sucess", 200

@payment.route("/success")
def success():
    print('Estrou no sucess')
    session_id = request.args.get('session_id')
    user = Db.get_name(session["username"])

    if not user.ok:
      session.pop("username", None)
      return getUrl('login.html', prop='msgFal', malue='Erro no banco de dados, se o problema persistir favor entrar em contato pelo WhatsApp')

    try:
        # Retrieve the Checkout session
        checkout_session = stripe.checkout.Session.retrieve(session_id)      
        today = datetime.datetime.now()
        
        # Update the user in the database
        Db.update_user(
            checkout_session['client_reference_id'], 
            {
                "payment": checkout_session,
                "datePurchase": today,
                "paymentEmail": checkout_session.customer_details['email']
            }
        )

        return getUrl("success.html", prop="msgTrue", value="Sua compra foi efetuada com sucesso, aproveite!")

    except Exception as e:
        print(e)
        return getUrl("success.html", prop="msgFalse", value=f"Erro ao processar o pagamento {e}")
@payment.route("/cancelled")
def cancelled():
  return getUrl("cancelled.html")
  
@payment.route("/signature")
def signature():
  return getUrl("signature.html")

