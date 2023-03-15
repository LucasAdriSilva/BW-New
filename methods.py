from flask import Flask, render_template, session
import shutil, os
import smtplib
import email.message
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from model.user import User
from model.db import Db
import string
import random

app2 = Flask(__name__)

def getUrl(url, lastUrl="login.html", prop='', value=''):
  #Verificação se o usuário é Free ou premiun e retornando os text + Urls referenet a cada plano
  if "username" in session:
    user_found =  Db.get_name(session['username'])
    count = user_found.data["count"]

    # Se for Free faça isso---
    if user_found.data["plan"] == "Free":
      textDefault = {
        "text": "Seja um assinante",
        "url": "/pageSignature",
        "count": count,
        "logout": True,
        prop: value
      }

      return render_template(
        url,
        data=textDefault,
      )
    # Se for Premium faça isso---
    elif user_found.data["plan"] == "Premium":
      textDefault = {
        "text": "Página do assinante",
        "url": "/pageSignature",
        "count": count,
        "logout": True,
        prop: value
      }
      return render_template(url, data=textDefault)
  else:
    textDefault = {
      "text": "Faça login",
      "url": "/login",
      "erro": "Pagina não encontrada",
      "logout": False,
      prop: value
    }
    return render_template(lastUrl, data=textDefault)

def countFree():
  user_found = Db.get_name(session['username'])

  if user_found.data['count'] == 0:
    return True
  else:
    return False

def deletpath():
  #Pega o nome do usuario na sessão
  name = session["username"]
  # Cria o caminho do arquivo da VSL
  dir = f"routes/feature/static/{name}/"
  if os.path.exists(dir):
    #Se tiver algo na pasta ele deleta
    shutil.rmtree(dir)
  return True

# envio de email
def random_generator(size=6, chars=string.ascii_uppercase + string.digits):
 return ''.join(random.choice(chars) for _ in range(size))

def send_email(emails, content, subject):
    try:  
        corpo_email = content

        msg = email.message.Message()
        msg['Subject'] = subject
        msg['From'] = 'agenciamktm@gmail.com'
        msg['To'] = emails
        password = 'vqslnaabrctovbbm' 
        msg.add_header('Content-Type', 'text/html')
        msg.set_payload(corpo_email )

        s = smtplib.SMTP('smtp.gmail.com: 587')
        s.starttls()
        # Login Credentials for sending the mail
        s.login(msg['From'], password)
        s.sendmail(msg['From'], [msg['To']], msg.as_string().encode('utf-8'))
        print('Email enviado')
    except Exception as e:
        print(f"Erro ao enviat email: {e}") 

def send_email_with_anexo(email, content, subject, dir):
    try:
        smtp_ssl_host = "smtp.gmail.com"
        smtp_ssl_port = 465

        recipient = email
        username = "agenciamktm@gmail.com"
        password = 'vqslnaabrctovbbm'

        message = MIMEMultipart()
        message["From"] = username
        message["To"] = ", ".join(recipient)
        message["Subject"] = subject
        body = MIMEText(content)
        message.attach(body)

        fp = open(dir, 'rb')
        anexo = MIMEApplication(fp.read(), _subtype="pptx")
        fp.close()
        anexo.add_header('Content-Disposition', 'attachment', filename='VSL.pptx')
        message.attach(anexo)

        server = smtplib.SMTP_SSL(smtp_ssl_host, smtp_ssl_port)
        server.login(username, password)
        server.sendmail(username, recipient, message.as_string().encode('utf-8'))
        server.quit()
    except Exception as e:
        print(f"Erro ao enviat email: {e}") 