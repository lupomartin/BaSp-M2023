//exercise 3
//Arrays
//exercise 3.A
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('exercise 3.A: ' +months[4]);
console.log('exercise 3.A: ' +months[10]);

//exercise 3.B
var months;
months.sort();
console.log('exercise 3.B: ' +months);

//exercise 3.C
var months;
months.unshift('martin');
months.push('lupo');
console.log('exercise 3.C: ' +months);

//exercise 3.D
var months;
months.shift();
months.pop();
console.log('exercise 3.D: ' +months);

//exercise 3.E
var reverse = months.reverse();
console.log('exercise 3.E: ' +reverse);

//exercise 3.F
var months;
var guion = months.join('-');
console.log('exercise 3.F: ' +guion);

//exercise 3.G
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copy = months.slice(4,11);
console.log('exercise 3.G: ' +copy);


