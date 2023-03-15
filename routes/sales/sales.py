from flask import Flask, Blueprint, session, request, flash, jsonify, render_template
from methods import getUrl
from flask_pymongo import PyMongo
import datetime


sales = Blueprint('sales', __name__, template_folder='templates')

@sales.route('/page')
def salesPage():
  return render_template('pageSales.html')
