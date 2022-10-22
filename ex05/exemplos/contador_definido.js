const readline = require('readline-sync');

console.log("Gera uma quantidade específica de valores\n\
	múltiplos de 10\n");

let qtd = parseInt(readline.question("Informe a quantidade "));

var msg = "Valores gerados\n\n";

for (var i = 1; i <= qtd; i++) {
	msg += i * 10 + "\n";
}

console.log(msg);