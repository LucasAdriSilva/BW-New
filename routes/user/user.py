from flask import Flask, Blueprint, session, request, flash, jsonify, render_template
import datetime
from methods import random_generator, send_email, getUrl
from model.user import User
from model.db import Db
import bcrypt

user = Blueprint('user', __name__, template_folder='templates')

@user.route('/reset', methods=["GET", "POST"])
def reset():
  if request.method == "POST":

    data = request.form.get("login")   
    #Verifica se o valor do capo é email
    user = Db.get_email(data)

    if user.data == None:
      #Verifica se o valor do capo é nome
      user = Db.get_name(data)

    if user.data != None and user.ok:
      #Gerando uma nova senha
      newPassword = random_generator()

      # Criptografia                                
      salt = bcrypt.gensalt()
      hashed_password = bcrypt.hashpw(newPassword.encode('utf-8'), salt)
      
      #Update em banco
      newUser = {'password': hashed_password}
      userToggle = Db.update_user(user.data['name'], newUser)

       # Enviando email com senha
      content = f"Segue a sua nova senha {newPassword}"
      subject = "Alteração de senha"
      send_email(userToggle.data["email"], content, subject)
      
      return getUrl("login.html", prop="msgTrue", value="E-mail com a nova senha enviada")
    else:
      return getUrl("reset.html", prop="msgFalse",value="Login ou senha não encontrado")
  else:
    return getUrl("reset.html", "reset.html")

@user.route('/togglePassword', methods=["GET", "POST"])
def togglePassword():
  if "username" in session:
    if request.method == "POST":
      oldPassword = request.form.get("oldPassword")
      newPassword = request.form.get("newPassword")
      passwordConfirmation = request.form.get("passwordConfirmation")

      #Pega os dados no banco do usuário
      user =  Db.get_name(session['username'])

      #Criptografia senha antiga
      if bcrypt.checkpw(oldPassword.encode('utf-8'), user.data["password"]):
        if newPassword == passwordConfirmation:

          #Criptografia senha nova
          salt = bcrypt.gensalt()
          hashed_password = bcrypt.hashpw(newPassword.encode('utf-8'), salt)

          newUser = {"password": hashed_password}
          save = Db.update_user(user.data['name'], newUser=newUser)

          if save.message != '':
            return getUrl("togglePassword.html", "togglePassword.html","msgFalse", save.message)

          return getUrl("login.html", prop="msg", value="Senha alterada com sucesso")
        else:
          return getUrl("togglePassword.html", "togglePassword.html","msgFalse","As novas senhas não são iguais, por favor verificar")
      else:
        #caso a senha antiga esteja errada
        return getUrl("togglePassword.html", "togglePassword.html", prop="msgFalse", value="A senha antiga está errada")
    else:
      return getUrl("togglePassword.html", "togglePassword.html")
  else:
    return getUrl("login.html")

@user.route('/register', methods=["GET", "POST"])
def register():
  if request.method == "POST":
    username = request.form.get("usuario")
    email = request.form.get("email")
    password = request.form.get("password")

    #Criptografia
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    # Verifica no banco se existe o mesmo usuario
    userDB = Db.get_name(username)
    emailDB = Db.get_email(email)

    #Verifica o get do banco
    if not userDB.ok and not emailDB.ok:
      flash("O banco de dados está com algum problema, caso o problema persistir acione nós pelo WhatsApp")
      return getUrl("register.html", "register.html")

    #Verificação do usuário
    if userDB.data != None:
      flash("O usuário já existe", "error")
      return getUrl("register.html", "register.html")

    #Verificação do email
    if emailDB.data != None:
      flash("O e-mail já existe", "error")
      return getUrl("register.html", "register.html")

    #Se nao tiver usuario ira salvar o novo
    user_register = User(name=username, password=hashed_password, email=email)

    save = Db.save(user_register)

    #Se estiver tudo Ok ele ira retorna
    if save.ok:  
      return getUrl("login.html", prop="msgTrue", value="Usuário cadastrado")

    if save.message != '':
      flash(f"{save.message}. Se o erro persistir por favor acione pelo WhatsApp", "error")
      return getUrl("register.html","register.html")

    
  else:
    return getUrl("register.html", "register.html")

@user.route("/logout")
def logout():
  session.pop("username", None)
  return getUrl("principal.html", "principal.html")

@user.route("/pageSignature")
def pageSignature():
    user = Db.get_name(session["username"])
    
    if user.data['plan'] == "Free":
      data = {
      "email": user.data['email'],
      "name": user.data['name'],
      "plan": user.data['plan'],
      "datePurchase": "Sem data de compra"
      }
      return getUrl("pageSignature.html", prop="info", value=data)


    dt = user.data['datePurchase']
    date = dt.strftime("%m/%d")

    # Calcular o número de dias restantes até a próxima renovação da fatura
    today = datetime.datetime.now()
    next_renewal = dt.replace(month=today.month, year=today.year)
    delta = next_renewal - today
    days_left = delta.days + 1

    # Calcular o número de VSLs que o usuário pode produzir até a próxima renovação
    # vsl_left = 20 - user.data['count']
    # max_vsls = vsl_left // days_left

    # Calcular dados a serem impressos na tela
    porcent = (user.data['count'] * 100) / 20
    media = round(user.data['count']/21, 2)

    data = {
      "email": user.data['email'],
      "name": user.data['name'],
      "plan": user.data['plan'],
      "datePurchase": date,
      "porcent": porcent,
      "media": media,
      # "max_vsls": max_vsls,
    }

    return getUrl("pageSignature.html", prop="info", value=data )
