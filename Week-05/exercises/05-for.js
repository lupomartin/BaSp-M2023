//Ejercicio 5
//Ejercicio 5.A
var palabrasArray = ['hamburguesa', 'helado', 'pizza', 'milanesa', 'pollo'];
for (var i = 0; i < palabrasArray.length; i++) {
    alert(palabrasArray[i]);
}
console.log('Ejercicio 5.A: ' + palabrasArray);

//Ejercicio 5.B
var palabrasArray;
for (var i = 0; i < palabrasArray.length; i++) {
    var mayus = palabrasArray[i][0].toUpperCase() + palabrasArray[i].slice(1);
    alert(mayus);
}
console.log('Ejercicio 5.B: ' + palabrasArray);

//Ejercicio 5.C
var sentence = "";
for (var i = 0; i < palabrasArray.length; i++) {
    sentence += palabrasArray[i] + " ";
}
alert('Ejercicio 5.C: ' + sentence);

//Ejercicio 5.D
let arrayVacio = [];
for (var g = 0; g < 10; g++) {
    arrayVacio.push(g);
}
console.log('Ejercicio 5.D: ' +arrayVacio);