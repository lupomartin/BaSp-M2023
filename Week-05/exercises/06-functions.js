//exercise 6
//Functions
//exercise 6.A
function add(a, b) {
    return a + b;
}
var result = add(5, 10);
console.log('exercise 6.A: ' + result);

//Ejercicio 6.B
function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("One of the parameters has an error.");
        return NaN;
    }
    return a + b;
}
var result = add('h', 10);
console.log('exercise 6.B: ' + result);

//Ejercicio 6.C
function validateInteger(num) {
    return Number.isInteger(num);
}

console.log(validateInteger(9));
console.log(validateInteger(8.22));

//Ejercicio 6.D
function addD(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("One of the parameters has an error.");
        return NaN;
    }
    return validateInteger(num);
}
console.log(validateInteger());
console.log(validateInteger());

//Ejercicio 6.E

