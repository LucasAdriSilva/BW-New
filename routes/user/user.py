from flask import Flask, Blueprint, session, request, flash, jsonify, render_template
from model.db import Db

user = Blueprint('user', __name__, template_folder='templates')

@user.route("/user")
def userRoute():
  if session['ip'] is not None:
    ip_found = Db.get_ip(session['ip']).data


  if isinstance(ip_found, dict):
    days = ip_found['days']
    pairedSets = ip_found['pairedSets']
    chosen = ip_found['chosenTraining']

    if pairedSets == 'true':
      if chosen == 'Fullbody':
        chosenTraining = ip_found['Treino']['pairedSetsTraining']['fullbodyPS']

      if chosen == 'PushPull':
        chosenTraining = ip_found['Treino']['pairedSetsTraining']['pushPullPS']
  
      if chosen == 'UpperLower':
        chosenTraining = ip_found['Treino']['pairedSetsTraining']['upperLowerPS']
    else:
      if chosen == 'Fullbody':
        chosenTraining = ip_found['Treino']['regularTraining']['fullbody']

      if chosen == 'PushPull':
        chosenTraining = ip_found['Treino']['regularTraining']['pushPull']
  
      if chosen == 'UpperLower':
        chosenTraining = ip_found['Treino']['regularTraining']['upperLower']


    data = {
      'nav': 'user',
      'training': chosenTraining,
      'days': days,
      'pairedSets': pairedSets,
      'chosenTraining': chosen
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