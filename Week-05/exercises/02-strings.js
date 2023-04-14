//Ejercicio 2
//Strings
//Ejercicio 2.A
var pais;
var mayusculas = pais.toUpperCase();
console.log('Ejercicio 2.A: ' + mayusculas);

//Ejercicio 2.B
var pais;
var subpais = pais.substring(0, 5);
console.log('Ejercicio 2.B: ' + subpais);

//Ejercicio 2.C

var pais;
var paisub = pais.substring(pais.length - 3);
console.log('Ejercicio 2.C: ' + paisub);

//Ejercicio 2.D
var pais;
var mayusminus = pais.substring(0, 1).toUpperCase() + pais.substring(1).toLowerCase();
console.log('Ejercicio 2.D: ' + mayusminus);

//Ejercicio 2.E
var espacio = 'soy martin';
var espacioBlanco = espacio.indexOf(' ');
console.log('Ejercicio 2.E: ' + espacioBlanco);

//Ejercicio 2.F
var palabraLarga = 'computadora microondas';
var computadora = palabraLarga.substring(0, palabraLarga.indexOf(' '));
var microondas = palabraLarga.substring(palabraLarga.indexOf(' ') + 1);
let junte = computadora[0].toUpperCase() + computadora.substring(1).toLowerCase() + " " + microondas[0].toUpperCase() + microondas.substring(1).toLowerCase();
console.log('Ejercicio 2.F: ' +junte);