const readline = require('readline-sync');

console.log("Identifica a estação do Ano a partir do mês\n");

let mes = parseInt(readline.question('Informe o mês '));

switch(mes) {
	case 1:
	case 2:
	case 3:
		console.log("Verão");
		break;
	case 4:
	case 5:
	case 6:
		console.log("Outono");
		break;
	case 7:
	case 8:
	case 9:
		console.log("Inverno");
		break;
	case 10:
	case 11:
	case 12:
		console.log("Primavera");
		break;
	default:
		console.log("Mês Inválido!");
		break;
}