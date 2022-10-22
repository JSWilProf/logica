const readline = require('readline-sync');

console.log("Identifica a Idade da pessoa\n");

let idade = parseInt(readline.question('Informe a sua Idade '));
let sexo = readline.question('Informe a sua Idade ')
				   .slice(0,1)
				   .toLowerCase();

if(idade >= 18) {
	if(sexo === "m") {
		console.log("Vá trabalhar!");
	} else {
		console.log("Vá ajudar a sua mãe");
	}
} else {
	console.log("Vá para a escola");
}