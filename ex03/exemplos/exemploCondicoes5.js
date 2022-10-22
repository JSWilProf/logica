const readline = require('readline-sync');

console.log("Identifica a estação do Ano a partir do mês\n");

let mes = parseInt(readline.question('Informe o mês '));

if(mes >= 1 && mes <= 3) {
	console.log("Verão");
} else if(mes >= 4 && mes <= 6) {
	console.log("Outono");
} else if(mes >= 7 && mes <= 9) {
	console.log("Inverno");
} else if(mes >= 10 && mes <= 12) {
	console.log("Primavera");
} else {
	console.log("Mês Inválido!");
}