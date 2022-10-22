const readline = require('readline-sync');

console.log("Demostra como obter o Quociente\n\
		e Resto da Divisão\n");

let num = parseInt(readline.question('Informe um nº '));

let quociente = Math.trunc(num / 10);
let resto = num % 10;

console.log("O Quociente é: ", quociente, "\ne o Resto é: ", resto);