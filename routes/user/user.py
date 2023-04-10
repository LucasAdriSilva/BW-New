from flask import Flask, Blueprint, session, request, flash, jsonify, render_template
from methods import random_generator, send_email, getUrl
from model.db import Db
import bcrypt

user = Blueprint('user', __name__, template_folder='templates')

@user.route("/user")
def userRoute():
  ip_found = Db.get_ip(session['ip']).data
  if ip_found is not None:
    training = ip_found['Treino']['regularTraining']['fullbody']
    data = {
      'nav': 'user',
      'treino': training,
      'allTreino': ip_found['Treino']
    }
    return render_template("user.html", data = data)
  else:
    data = {
      'nav': 'user',
      'treino': None
    }
    # data.setdefault('treino', [])
    return render_template("user.html", data = data)


@user.route("/pageUser")
def pageUser():
  data = {'nav': None}
  return render_template("pageUser.html", data = data)