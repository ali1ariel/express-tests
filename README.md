# Testes com express e Postman

   Uma aplicação básica com express e um banco de dados de sessão para testes de CRUD's. 


### Pré-requisitos
```
 NodeJS
 Postman ou Imsomnia
```
Requisitos do aplicativo:
Na pasta principal digite o comando, dependendo do seu gerenciador de pacotes, para instalar os requisitos da aplicação contidas no package.json.


### Utilizando
 
Para enviar uma solicitação get de todos os produtos pelo Postman, utilize a função get no endereço:

```
http://localhost:3003/produtos
```

Para post, utiliza-se a função post setada em 'x-www-form-urlencond', e campos key 'name' e 'price'.

especificando o id, pode se alterar com a função put, e deletar com a função delete.

