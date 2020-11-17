# curso-react-redux-cod3r
Material de estudo do curso "Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!" da COD3R na Udemy.

## Clonar o repositório do curso com os programas:
https://github.com/dantovsky/curso-react-redux-cod3r

## Entrar na pasta do programa

- npm install (instalar as dependencias)
- npm start (iniciar a app)

## Apps desenvolvidas no curso de React

### TodoApp

![TodoApp com React](https://raw.githubusercontent.com/dantovsky/curso-react-redux-cod3r/master/screenshot-todoapp.png "TodoApp com React")

- Backend com PM2, Node Restful, Mongo, Mongoose.
- Frontend React.

Para rodar o projeto TodoApp:
- Rodar o MongoDB: 'sudo mongod' (ou: 'sudo mongod --port 27018')
- Rodar o backend: 'sudo npm run dev' from backend folder (ou: 'sudo npm run production' para rodar o PM2)
- Rodar o frontend: 'sudo npm run dev' from frontend folder

### Seção 8: Aplicação Final - Ciclos de Pagamentos (Backend)

![Dashboard - Ciclo de Pagamentos](my-money-app-dashboard.png "Dashboard - Ciclo de Pagamentos")

Portas utilizadas:
- 3003 (backend)
- 8080 (frontend)

#### Tech utilizadas
- MongoDB
- Mongoose (mapeamento dos objetos para ser persistidos no MongoDB)
- Node Restful (módulo Node para construir webservices)
- Express (servidor web para rodar os webservices)
- Node

#### Estrutura de pastas
```
- my-money-app
    - backend (Node)
    - frontend (React)
```

#### MyMoney - Backend - API

![API - Ciclo de Pagamentos](my-money-app-api.png "API - Ciclo de Pagamentos")

GET, POST ciclos de pagamento: 
http://localhost:3004/api/billinCycles

GET quantidade de ciclos de pagamanto  
http://localhost:3004/api/billinCycles/count

GET so sumário de créditos e débitlos
http://localhost:3004/api/billinCycles/summary
```json
{
"credit": 18400,
"debt": 1619.12
}
```

#### Config backend

Criação do config.json
- npm init -y

Dependências
- npm i --save express@4.14.0 mongoose@4.7.0 body-parser@1.15.2 lodash@4.17.4 mongoose-paginate@5.0.3 express-query-int@1.0.1 node-restful@0.2.5 pm2@2.1.5

Dependências de desenvolvimento
- npm i --save-dev nodemon@1.11.0

#### Mapeamendo ODM (Obeto - Documento)

Mapeamento dos ciclos de pagamento para que possam ser persistidos na base de dados.


#### Mock data para testes

Postman » Body » x-www-form-urlencoded » Bulk Edit:  
POST :: http://localhost:3004/api/billinCycles

```
name: Janeiro/17
month: 1
year: 2017
credits[0][name]: Salario Empresa
credits[0][value]: 6500
credits[1][name]: Salario Professor
credits[1][value]: 2700
debts[0][name]: Telefone
debts[0][value]: 86.56
debts[0][status]:PAGO
debts[1][name]: Condomínio
debts[1][value]: 720
debts[1][status]:AGENDADOs
```

JSON Response (se inserção com sucesso)
```json
{
    "__v": 0,
    "name": "Janeiro/17",
    "month": 1,
    "year": 2017,
    "_id": "5fb1dbb9b789fa7a5d62c5cd",
    "debts": [
        {
            "name": "Telefone",
            "value": 86.56,
            "status": "PAGO",
            "_id": "5fb1dbb9b789fa7a5d62c5cf"
        },
        {
            "name": "Condomínio",
            "value": 720,
            "status": "AGENDADO",
            "_id": "5fb1dbb9b789fa7a5d62c5ce"
        }
    ],
    "credits": [
        {
            "name": "Salario Empresa",
            "value": 6500,
            "_id": "5fb1dbb9b789fa7a5d62c5d1"
        },
        {
            "name": "Salario Professor",
            "value": 2700,
            "_id": "5fb1dbb9b789fa7a5d62c5d0"
        }
    ]
}
```

PUT :: http://localhost:3004/api/billinCycles/:id (adicionar o _id como parametro tab "Params")