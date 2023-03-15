from flask import Flask, render_template
from waitress import serve
import os
from routes.basicScreens.basicScreens import basicScreens
# from routes.feature.feature import feature
# from routes.login.login import login_bp
# from routes.payment.payment import payment
# from routes.sales.sales import sales
# from routes.user.user import user
from model.db import Db


app = Flask(__name__, template_folder='base', static_folder='base/assets')
app.config["SECRET_KEY"] = os.environ.get('CONFIG')

app.register_blueprint(basicScreens)
# app.register_blueprint(feature)
# app.register_blueprint(login_bp)
# app.register_blueprint(payment)
# app.register_blueprint(sales)
# app.register_blueprint(user)

if __name__ == "__main__":
  app.run(debug=True,port=8082)
  #serve(app, host="0.0.0.0", port=8080)