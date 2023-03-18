from flask import Blueprint, render_template, request, redirect, url_for
import json

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
        return redirect(url_for('basicScreens.index2', data=data))

    return render_template("home.html")


@basicScreens.route("/2" , methods=["GET", "POST"])
def index2():
    res = request.args.get('data')
    if res != None:
      teste = json.loads(res.replace("'", "\""))
      data = {
        'nav': 'creat',
        'treino': teste['treino'] 
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
  return render_template("home3.html", data = data)

