const readline = require('readline-sync');

console.log("Identifica a Idade da pessoa\n");

let idade = parseInt(readline.question('Informe a sua Idade '));

if(idade >= 18) {
	console.log("Vá trabalhar!");
} else {
	console.log("Vá para a escola");
}