<!-- cria pasta -->

mkdir api-node

<!-- Entra na pasta -->
cd api-node

<!-- inicia o package.json -->
npm init -y

<!-- inicia o vscode -->
code .

<!-- Cria o arquivo index.js -->
type nul > index.js
t
<!--instal exprees | rodar servidor do node  -->
npm install express

<!-- nodemon | reinicia o servidor do node sempre que alterar o arquivo automaticamente

$ IR EM PACKAGE.json

$$alterar:

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

$$$ PARA ESSE:

 "scripts": {
    "serve": "nodemon"
  },

-->
npm install nodemon -D

<!-- install consign dependence's module -->
 npm install consign