#Classe para padronizar os dados de usuários

class User:
    def __init__(self, name="none", email="none", password="none", plan="Free", payment=[], count=6, sessionId="none", datePurchase="none"):
        self.name = name
        self.email = email
        self.password = password
        self.plan = plan
        self.payment = payment or []
        self.count = count
        self.sessionId = sessionId
        self.datePurchase = datePurchase