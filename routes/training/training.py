from flask import Blueprint, render_template, session, request, jsonify
from model.db import Db
import datetime, json

training_bp = Blueprint('training', __name__, template_folder='templates')


@training_bp.route('/training')
def training():
  if session['ip'] is not None:
    ip_found = Db.get_ip(session['ip']).data
    print(ip_found)
    if ip_found is not None:
      data = {'nav': None}

      return render_template('training.html', data=data)
    else:
      data = {'nav': 'home'}
      return render_template('firstAcess.html', data=data)


@training_bp.route('/saveTraining', methods=["POST"])
def saveTraining():
  data = request.get_data().decode()
  
  if session['ip'] is not None:
    ip_found = Db.get_ip(session['ip']).data

    if isinstance(ip_found, dict):
      days = ip_found['days']
      pairedSets = ip_found['pairedSets']
      ip_found['chosenTraining'] = data
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
        
        Db.update_user(session['ip'], {'Training': chosenTraining, 'chosenTraining': data})
    else:
      Db.update_user(session['ip'], {'chosenTraining': data})

    response_data = {"message": "Training saved successfully."}
    return jsonify(response_data), 200
  

@training_bp.route('/saveTrainingTracker', methods=["POST"])
def saveTrainingTracker():
    data = request.get_data().decode()
    data = json.loads(data.replace("'", "\""))

    now = datetime.datetime.now()
    date_str = now.strftime("%d/%m/%Y")

    ip_found = Db.get_ip(session['ip']).data

    if 'historyTraining' in ip_found:
        ip_found['historyTraining'].append({date_str : data})
    else:
        historyTraining = [{date_str : data}]
        ip_found['historyTraining'] = historyTraining

    Db.update_user(session['ip'], {'historyTraining': ip_found['historyTraining']})

    response_data = {"message": "Training saved successfully."}
    return jsonify(response_data), 200
 