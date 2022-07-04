//montar uma base de dados com as seguintes entradas de dados:nome,idade,profissao.
//aceitar apenas maiores de 18 anos

let entrada1 = require("readline-sync");

let nome = entrada1.question("informe o nome completo");

let entrada2 = require("readline-sync");

let idade = entrada2.question("informe sua idade");

if(idade>=18){
    console.log("bem-vindo, cadastro valido");
} else {
    console.log("cadastro apenas para maiores de 18 anos");
}

let entrada3 = require("readline-sync");

let profissao = entrada3.question("informe sua profissao");

console.log("cadastro confirmado");
