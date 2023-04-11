from flask import Flask, Blueprint, session, request, flash, jsonify, render_template
from methods import random_generator, send_email, getUrl
from model.db import Db
import bcrypt

user = Blueprint('user', __name__, template_folder='templates')

@user.route("/user")
def userRoute():
  if session['ip'] is not None:
    ip_found = Db.get_ip(session['ip']).data

  if isinstance(ip_found, dict):
    days = ip_found['days']
    pairedSets = ip_found['pairedSets']
    data = {
      'nav': 'user',
      'allTreino': ip_found['Treino'],
      'days': days,
      'pairedSets': pairedSets
    }
    return render_template("user.html", data = data)
  else:
    data = {
      'nav': 'user'
    }
    return render_template("user.html", data = data)


@user.route("/pageUser")
def pageUser():
  data = {'nav': None}
  return render_template("pageUser.html", data = data)