from flask import Blueprint, render_template
from methods import getUrl
from methods import deletpath

basicScreens = Blueprint('basicScreens', __name__, template_folder='templates')

@basicScreens.route("/")
def index():
  data = {
    'nav': '1'
  }
  return render_template("home.html", data = data)

@basicScreens.route("/2")
def idenx2():
  data = {
    'nav': '2'
  }
  return render_template("home2.html", data = data)

@basicScreens.route("/3")
def index3():
  data = {
    'nav': '3'
  }
  return render_template("home3.html", data = data)

