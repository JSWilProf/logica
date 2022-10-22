const readline = require('readline-sync');

console.log("Identifica a Idade da pessoa\n");

let idade = parseInt(readline.question('Informe a sua Idade '));
let sexo = readline.question('Informe a seu Sexo ').toLowerCase();

if(idade >= 18 && sexo.startsWith("m")) {
	console.log("Vá trabalhar!");
} else if(idade >= 18 && sexo.startsWith("f")) {
	console.log("Vá ajudar a sua mãe");
} else {
	console.log("Vá para a escola");
}