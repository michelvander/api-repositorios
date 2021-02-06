# api-repositorios
API simples para controle de repositórios em memória, feito para aprendizado de curso NodeJS

# Utilização
Para utilziar, instalar o Node no computador, depois executar o seguinte comando dentro da pasta src:

>node server.js

As requisições que a API espera são:

# GET (/repositories)
Retorno (exemplo):

[
  {
    "id": "261e88fd-cefa-4487-bdc9-566b62e1422e",
    "title": "Curso Python",
    "url": "https://github.com/NodeJS",
    "techs": [
      "Python",
      "Jango",
      "IA"
    ],
    "like": 6
  }
]

# POST (/repositories)
Envio (criar o repositório):

{
	"title": "Curso Python",
	"url": "https://github.com/NodeJS",
	"techs": ["Python", "Jango", "IA"]
}


# PUT (/repositories/:id) - Onde ':id' é o ID do repositório
Envio (atualizar repositório):

{
  "id": "261e88fd-cefa-4487-bdc9-566b62e1422e",
  "title": "Curso Python",
  "url": "https://github.com/NodeJS",
  "techs": [
    "Python",
    "Jango",
    "IA"
  ],
  "like": 6
}


# POST (/repositories/:id/like)
Envio (dar um like no repositório:
{
  "id": "261e88fd-cefa-4487-bdc9-566b62e1422e",
  "title": "Curso Python",
  "url": "https://github.com/NodeJS",
  "techs": [
    "Python",
    "Jango",
    "IA"
  ],
  "like": 6
}

Retorno (com likes atualizados):
{
  "id": "261e88fd-cefa-4487-bdc9-566b62e1422e",
  "title": "Curso Python",
  "url": "https://github.com/NodeJS",
  "techs": [
    "Python",
    "Jango",
    "IA"
  ],
  "like": 7
}

# DELETE (/repositories/:id)
Deleta repositório com ID passado como parâmetro, através da requisião do tipo delete.
