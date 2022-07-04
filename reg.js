// codigo para cadastro de pecas
// se a peca tiver mais de 100 gramas o cadastro e valido
// se a lista de pecas for maior que 10, imprimir mensagem de erro informando nao ter capacidade suficciente
// se o nome da peca tiver menos de 3 caracteres informar mensagem de erro

let entrada1 =  require("readline-sync");

let peso = entrada1.question("qual o peso em gramas da peca?");

if(peso>=100){
    console.log("Peca com peso suficiente para cadastro");
} else{
    console.log("Peca com peso insuficiente para cadastro");
}

let entrada2 = require("readline-sync");

let listaPecas = entrada2.question("qual a quantidade de pecas?");

if (listaPecas>=10){
    console.log("a lista esta sem espaco no momento para esta quantidade de pecas");
} else  {
    console.log("a peca pode ser cadastrada no momento")
}

let entrada3 = require("readline-sync");

let nomePeca = entrada3.question("qual o nome da pecas?");

if(nomePeca.length < 3){
    console.log ("O nome deve posuir pelo menos 3 caracteres");
}

console.log("peca cadastrada")

console.log("registro confirmado")