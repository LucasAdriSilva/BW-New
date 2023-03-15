from flask import Flask, render_template
from waitress import serve


# app = Flask(__name__, template_folder='base', static_folder='base/assets')
# app.config["SECRET_KEY"] = os.environ.get('CONFIG')

app = Flask(__name__)
app.config["SECRET_KEY"] = 'etste'

@app.route('/')
def home():
  return render_template('home.html')

if __name__ == "__main__":
  app.run(debug=True,port=8082)
  #serve(app, host="0.0.0.0", port=8080)