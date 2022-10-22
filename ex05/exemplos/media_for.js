const readline = require('readline-sync');

console.log("Calcula a média de notas\n\
	utilizando a instrução for\n");

var media = 0;
for(var i = 0;i < 4;i++) {
	media += parseInt(readline.question("Informe a " + (i + 1) + "ª nota "));
}
media /= 4;

console.log("A média é:", media.toFixed(2), "- " + (media >= 7.0 ? "Aprovado" : "Reprovado"));