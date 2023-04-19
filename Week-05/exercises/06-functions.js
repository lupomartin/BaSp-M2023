//exercise 6
//Functions
//exercise 6.A
function suma(a, b) {
    return a + b;
}
var result = suma(5, 10);
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
const resultado = sumaValida(3.5, 5);
console.log(resultado);

function validateInteger(number) {
    var numberVer = number % 1;
    if (numberVer === 0) {
        return true;
    } else {
        return false
    }
};

//Ejercicio 6.E
function sumaValida(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        if (a === true && b === false) {
            b = Math.round(b);
            alert("The second number is not an integer. Rounding: " + b);
        } else if (a === false && b === true) {
            a = Math.round(a);
            alert("The first number is not an integer. Rounding: " + a);
        } else {
            a = Math.round(a);
            b = Math.round(b);
            alert("No number is whole. Rounding: " + a + " and " + b);
        }
    }
    return a + b;
    console.log('exercise 6.E: ' + a + b);
};
