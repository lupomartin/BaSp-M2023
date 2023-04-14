//Exercise 2
//Strings
//Exercise 2.A
var country;
var capitalLetters = country.toUpperCase();
console.log('exercise 2.A: ' + capitalLetters);

//Exercise 2.B
var country;
var subcountry = country.substring(0, 5);
console.log('exercise 2.B: ' + subcountry);

//Exercise 2.C

var country;
var countryub = country.substring(country.length - 3);
console.log('exercise 2.C: ' + countryub);

//Exercise 2.D
var country;
var mayusminus = country.substring(0, 1).toUpperCase() + country.substring(1).toLowerCase();
console.log('exercise 2.D: ' + mayusminus);

//Exercise 2.E
var space = 'im martin';
var blanks = space.indexOf(' ');
console.log('exercise 2.E: ' + blanks);

//Exercise 2.F
var longWord = 'computadora microondas';
var computadora = longWord.substring(0, longWord.indexOf(' '));
var microondas = longWord.substring(longWord.indexOf(' ') + 1);
let junte = computadora[0].toUpperCase() + computadora.substring(1).toLowerCase() + " " + microondas[0].toUpperCase() + microondas.substring(1).toLowerCase();
console.log('exercise 2.F: ' +junte);