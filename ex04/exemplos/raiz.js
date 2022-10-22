const readline = require('readline-sync');

console.log("Calcula a raiz quadrada de um nº\n");

let num = parseFloat(readline.question('Informe um nº '));

let raiz = Math.sqrt(num);

console.log("A Raiz de ",num, " é: ", raiz);