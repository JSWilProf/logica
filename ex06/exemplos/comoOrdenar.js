console.log("Demonstra um algoritmo de ordenação\n");

var num = [ 12, 3, 15, 2, 8, 6, 3, 20, 19, 4 ];

var trocou;
do {
	trocou = false;
	for (var i = 0; i < num.length - 1; i++) {
		if (num[i] > num[i + 1]) {
			var temp = num[i];
			num[i] = num[i + 1];
			num[i + 1] = temp;
			trocou = true;
		}
	}
	
	var msg = num[0];
	for (var i = 1; i < num.length; i++) {
		msg += ", " + num[i];
	}
	console.log(msg + " -> " + (trocou ? "não " : "") + "está em Ordem");
} while(trocou);

var i = num.length -1;
var msg = num[i--];
for (;i >= 0 ; i--) {
	msg += ", " + num[i];
}
console.log(msg);