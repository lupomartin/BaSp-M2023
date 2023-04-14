//exercise 5
//For
//exercise 5.A
var wordsArray = ['burger', 'ice-cream', 'pizza', 'milanesa', 'chicken'];
for (var i = 0; i < wordsArray.length; i++) {
    alert(wordsArray[i]);
}
console.log('exercise 5.A: ' + wordsArray);

//exercise 5.B
var wordsArray;
for (var i = 0; i < wordsArray.length; i++) {
    var mayus = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
    alert(mayus);
}
console.log('exercise 5.B: ' + wordsArray);

//exercise 5.C
var sentence = "";
for (var i = 0; i < wordsArray.length; i++) {
    sentence += wordsArray[i] + " ";
}
alert('exercise 5.C: ' + sentence);

//exercise 5.D
let arrayVacio = [];
for (var g = 0; g < 10; g++) {
    arrayVacio.push(g);
}
console.log('exercise 5.D: ' +arrayVacio);