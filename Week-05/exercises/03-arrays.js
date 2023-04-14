//Ejercicio 3
//Ejercicio 3.A
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Ejercicio 3.A: ' +meses[4]);
console.log('Ejercicio 3.A: ' +meses[10]);

//Ejercicio 3.B
var meses;
meses.sort();
console.log('Ejercicio 3.B: ' +meses);

//Ejercicio 3.C
var meses;
meses.unshift('martin');
meses.push('lupo');
console.log('Ejercicio 3.C: ' +meses);

//Ejercicio 3.D
var meses;
meses.shift();
meses.pop();
console.log('Ejercicio 3.D: ' +meses);

//Ejercicio 3.E
var reverse = meses.reverse();
console.log('Ejercicio 3.E: ' +reverse);

//Ejercicio 3.F
var meses;
var guion = meses.join('-');
console.log('Ejercicio 3.F: ' +guion);

//Ejercicio 3.G
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copia =meses.slice(4,11);
console.log('Ejercicio 3.G: ' +copia);


