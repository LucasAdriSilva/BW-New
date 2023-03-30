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
      treino = json.loads(res.replace("'", "\""))

      all = Exercicio.getAllExercicios()
      
      # pega o valor do Paired Sets
      pairedSets = treino['treino'][-1]
      # remove o Paired Sets do array de treino
      treino['treino'].pop(-1)

      # Se for true, reordenas os exercicios
      if pairedSets['value'] == 'true':
        try:
          data_all = []
          new_order = []

          for a in all:
            for t in treino['treino']:
              if a["name"] == t["name"]:
                new_data = a.copy()
                new_data.update(t)
                data_all.append(new_data)
              
          for e in data_all:
            repeated_e = [e.copy() for _ in range(e['rept'])]  # cria uma cópia do dicionário e rept vezes
            for i, d in enumerate(repeated_e):
                d['rept_num'] = i + 1  # adiciona um novo campo 'rept_num' com o número de repetição
                d['reset'] = '1:30'   # altera o campo 'reset' para '1:30'
            new_order.extend(repeated_e)


          # Agrupa os objetos por categoria
          categories = {}
          for a in new_order:
              category = a["category"]
              if category not in categories:
                  categories[category] = []
              categories[category].append(a)

          #  Cria 2 arrays para fazer a intecalação
          dist1 = []
          distAux = []

          # Intercalas os arrays
          dist1 = [valor for par in zip(categories['Push'], categories['Core']) for valor in par]
          distAux = [valor for par in zip(categories['Pull'], categories['Legs']) for valor in par]

          #Adiciona os 2 arrays em um só
          dist1.extend(distAux)
          
          data = {
            'nav': 'creat',
            'treino': treino['treino'],
            'pairedSets': pairedSets,
            'ExerPS': dist1
          }
        except Exception as e:
          print(f"{e}")
          data = {'nav': 'creat'}
      # Se for false retorna os exercicios
      else:
          data = {
            'nav': 'creat',
            'treino': treino['treino']
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

