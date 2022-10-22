const readline = require('readline-sync');

console.log("Apresenta a função recursiva de\n\
	Hanoi\n");

const hanoi = function(n) {
	if(n > 1) {
		return 2 * hanoi(n - 1) + 1;
	}
	return 1;
}
var num = parseInt(readline.question("Informe um nº "));
while(num > 0) {
	console.log(hanoi(num));	

	num = parseInt(readline.question("Informe um nº "));
}
