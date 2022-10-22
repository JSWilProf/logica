const readline = require('readline-sync');

console.log("Apresenta a função recursiva de\n\
	Fibonacci\n");

const f = function(n) {
	if (n > 2) {
		return f(n - 2) + f(n - 1);
	}
	return 1;
}

var num = parseInt(readline.question("Informe um nº "));

while (num > 0) {
	console.log(f(num));

	num = parseInt(readline.question("Informe um nº "));
}
