const readline = require('readline-sync');

console.log("Calcula a média de notas\n\
	utilizando a instrução while\n");

var media = 0;
var i = 0;
while(i < 4) {
	media += parseInt(readline.question("Informe a " + (i + 1) + "ª nota "));
	i++;
}
media /= 4;

console.log("A média é:", media.toFixed(2), "- " + (media >= 7.0 ? "Aprovado" : "Reprovado"));