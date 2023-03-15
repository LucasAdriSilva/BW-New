from flask import Blueprint
from methods import getUrl
from methods import deletpath

basicScreens = Blueprint('basicScreens', __name__, template_folder='templates')

@basicScreens.route("/")
def index():
  return getUrl("principal.html", "principal.html")

@basicScreens.route("/shortly")
def shortly():
  return getUrl("emBreve.html","emBreve.html")

@basicScreens.route("/del")
def deletField():
  deletpath()
  return getUrl("principal.html")

@basicScreens.route('/priPol')
def priPol():
  return getUrl('privacyPolicy.html', 'privacyPolicy.html')

@basicScreens.route('/termsUse')
def termsUse():
  return getUrl('termsUse.html', 'termsUse.html')

