//Ejercicio 4
//Ejercicio 4.A
var numero = Math.random();
if (numero >= 0.5) {
    alert("Greater than or equal to 0.5");
} else {
    alert("Lower than 0.5");
}
console.log('Ejercicio 4.B: ' +numero);

//Ejercicio 4.B
var edad = Math.floor(Math.random() * 101);
if (edad < 2) {
    alert("Bebe");
  } else if (edad >= 2 && edad <= 12) {
    alert("Niño");
  } else if (edad >= 13 && edad <= 19) {
    alert("Adolescente");
  } else if (edad >= 20 && edad <= 30) {
    alert("Joven");
  } else if (edad >= 31 && edad <= 60) {
    alert("Adulto");
  } else if (edad >= 61 && edad <= 75) {
    alert("Adulto mayor");
  } else {
    alert("Anciano");
  }
  console.log('Ejercicio 4.C: ' +edad);