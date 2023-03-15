from flask import Flask, Blueprint, session, request, flash, jsonify, url_for
from methods import getUrl
from model.user import User
from model.db import Db
import bcrypt
# from flask_oauthlib.client import OAuth

# app = Flask(__name__)
# oauth = OAuth(app)

# facebook = oauth.remote_app(
#     'facebook',
#     consumer_key='1614910382303307',
#     consumer_secret='c53ece8ee7511225162a6c2dd7d5c0f3',
#     request_token_params={'scope': 'email,user_birthday'},
#     base_url='https://graph.facebook.com',
#     request_token_url=None,
#     access_token_url='/oauth/access_token',
#     access_token_method='GET',
#     authorize_url='https://www.facebook.com/dialog/oauth'
# )

# def get_facebook_token():
#     if 'oauth_token' in session:
#         return session['oauth_token'][0]
#     return None

# facebook.tokengetter(get_facebook_token)



login_bp = Blueprint('login_bp', __name__, template_folder='templates')

@login_bp.route("/login", methods=["GET", "POST"])
def login():
  try:
    # verifica se está logado
    if "username" in session:
      return getUrl("principal.html", "principal.html")

    # Se for um login executara esse trecho
    elif request.method == "POST":
      username = request.form.get("usuario")
      password = request.form.get("senha")

      try:
        user_found = Db.get_name(username)
      except Exception as e:
        return getUrl('login.html', prop='msgFalse', value=f'Erro no banco de dados --> {e}')

      if user_found.data != None:

        userDB = user_found.data
        user_val = userDB["name"]
        passwordcheck = userDB["password"]

        if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
          session["username"] = user_val
          session["plan"] = userDB["plan"]
          return getUrl("principal.html")
        else:
          flash("Senha Incorreta", "error")
          return getUrl("login.html")
      else:
        flash("Usuário não encontrado")
        return getUrl("login.html")

    else:
      return getUrl("login.html")

    return getUrl("login.html")
  except Exception as e:
    return getUrl('login.html', prop='msgFalse', value=f'Erro no login -- > {e}')
################################# IMMPLEMENTANDO ######################################
# @login_bp.route('/login_face')
# def login_pass():
#     return facebook.authorize(callback=url_for('facebook_authorized',
#         next=request.args.get('next') or request.referrer or None,
#         _external=True))

# @login_bp.route('/login_face/authorized')
# @facebook.authorized_handler
# def facebook_authorized(resp):
#     if resp is None:
#         return 'Access denied: reason=%s error=%s' % (
#             request.args['error_reason'],
#             request.args['error_description']
#         )

#     session['oauth_token'] = (resp['access_token'], '')

#     # Use o access token para obter o email do usuário
#     me = facebook.get('/me?fields=id,name,email,birthday,gender')

#     user_id = me.data.get('id')
#     name = me.data.get('name')
#     email = me.data.get('email')
#     birthday = me.data.get('birthday')

#     # return 'Logged in as id=%s name=%s redirect=%s' % \
#     #     (me.data['id'], me.data['name'], request.args.get('next'))
#     print(user_id, name, email, birthday)
#     return  jsonify(me.data)

# @login_bp.route('/delete_user_data')
# def delete_user_data():
#    # Verifique se o usuário está autenticado
#     if 'oauth_token' not in session:
#         return 'Você precisa estar logado para excluir seus dados.'

#     # Obtenha o token de acesso do usuário
#     access_token = session['oauth_token'][0]

#     # Use o token de acesso para fazer uma solicitação ao Facebook Graph API
#     # para excluir os dados do usuário
#     url = 'https://graph.facebook.com/{user_id}/permissions?access_token={access_token}'.format(
#         user_id='me',
#         access_token=access_token
#     )

#     response = facebook.delete(url)

#     if response.status == 200:
#         # Exclusão bem-sucedida
#         return 'Seus dados foram excluídos com sucesso.'
#     else:
#         # Exclusão falhou
#         return 'Não foi possível excluir seus dados. Por favor, tente novamente mais tarde.'
