
from pymongo import MongoClient
from model.response import Response
import os, datetime

client = MongoClient(os.environ.get('MONGO_DB'))

db = client.DCVS 


class Db:
    def ping():
        response = Response()
        try:
            # testa a conexão ao cluster
            client.admin.command('ping')
            return response
        except Exception as e:
            response.ok = False
            response.message = f"Erro no banco de dados --> {e}"
            return response
    
    def save(data):
        response = Response()
        try:
            #Transforma o User em disct
            dict_data = vars(data)
            response.data = db.user.insert_one(dict_data)
        except Exception as e:
            response.message = f"Erro no banco de dados ---> {e}"
            response.ok = False
            return response
        return response

    def get_name(name):
        response = Response()
        try:
            response.data = db.user.find_one({"name": name})
        except Exception as e:
            response.message = f"Erro de banco de dados ---> {e}"
            response.ok = False
            return response
        return response
      
    def get_emailPayment(email):
        response = Response()
        try:
            response.data = db.user.find_one({"paymentEmail": email})
        except Exception as e:
            response.message = f"Erro de banco de dados ---> {e}"
            response.ok = False
            return response
        return response
      
    def get_email(email):
        response = Response()
        try:
            response.data = db.user.find_one({"email": email})
        except Exception as e:
            response.message = f"Erro de banco de dados ---> {e}"
            response.ok = False
            return response
        return response

    def update_user(user, newUser):
        #instancia uma classe de resposta
        response = Response()
        try:
            verification_user = Db.get_name(user)

            if verification_user.data == None:
                verification_user = Db.get_email(user)

            if verification_user.data != None:
                response.data = db.user.find_one_and_update(
                    {'_id': verification_user.data['_id']}, 
                    {"$set": newUser}
                )
        except Exception as e:
            #Erro no banco
            response.ok = False 
            response.message = f"Erro de banco de dados ---> {e}"
            return response
        return response
    
    # def save_vsl(Vsl):
    #     response = Response()
    #     try:
    #         #Transforma o User em disct
    #         dict_data = Vsl.__dict__
    #         # dict_data = vars(Vsl)
    #         response.data = db.vsl.insert_one(dict_data)
    #         print('salvo', dict_data)
    #     except Exception as e:
    #         response.message = f"Erro no banco de dados ---> {e}"
    #         response.ok = False
    #         return response
    #     return response
    
    def save_vsl(vsl_list):
        response = Response()
        try:
            dict_data = {"data": vsl_list, "Date": datetime.datetime.now()}
            response.data = db.vsl.insert_one(dict_data)
            print('salvo', dict_data)
        except Exception as e:
            response.message = f"Erro no banco de dados ---> {e}"
            response.ok = False
            return response
        return response






