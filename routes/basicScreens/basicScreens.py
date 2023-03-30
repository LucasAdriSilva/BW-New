from flask import Blueprint, render_template, request, redirect, url_for
import json
from model.exercicio import Exercicio 

basicScreens = Blueprint('basicScreens', __name__, template_folder='templates')

@basicScreens.route("/")
def index():
  data = {
    'nav': '1'
  }
  return render_template("home.html", data = data)


@basicScreens.route("/sendTraining", methods=["GET", "POST"])
def teste():
    if request.method == "POST":
        treino = request.get_json()
        data = {'treino': treino}
        print(data)
        return redirect(url_for('basicScreens.index2', data=data))

    return render_template("home.html")


@basicScreens.route("/2" , methods=["GET", "POST"])
def index2():
    res = request.args.get('data')
    if res != None:
      try:
        treino = json.loads(res.replace("'", "\""))

        all = Exercicio.getAllExercicios()

        pairedSets = treino['treino'][-1]
        treino['treino'].pop(-1)

        data_all = []
        new_order = []

        for a in all:
          for t in treino['treino']:
            if a["name"] == t["name"]:
              new_data = a.copy()
              new_data.update(t)
              data_all.append(new_data)
             
        for e in data_all:
          repeated_e = [e] * e['rept']  # repete o dicionário e rept vezes
          new_order.extend(repeated_e)  # adiciona a lista resultante à new_order # adiciona a lista resultante à new_order

        print(new_order)
        
        data = {
          'nav': 'creat',
          'treino': treino['treino'],
          'pairedSets': pairedSets,
          'all': new_order
        }
      except Exception as e:
        print(f"Errrooo --> {e}")
        data = {
          'nav': 'creat',         
        }
      return render_template("home2.html", data=data)
    else: 
      data = {
        'nav': 'creat'
      }
      return render_template("home2.html", data=data)


@basicScreens.route("/3")
def index3():
  data = {
    'nav': '3'
  }
  return render_template("user.html", data = data)

