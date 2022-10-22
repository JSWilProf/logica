const readline = require('readline-sync');

console.log("Gera uma quantidade indefinida de valores\n\
	múltiplos de 10\n");

console.log("Valores gerados\n");

var valor = parseInt(readline.question("Informe um valor "));
while(valor > 0) {
	console.log(valor * 10);

	valor = parseInt(readline.question("Informe um valor "));
}
