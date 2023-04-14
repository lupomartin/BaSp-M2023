//exercise 4
//If-Else
//exercise 4.A
var number = Math.random();
if (number >= 0.5) {
    alert("Greater than or equal to 0.5");
} else {
    alert("Lower than 0.5");
}
console.log('exercise 4.A: ' + number);

//exercise 4.B
var age = Math.floor(Math.random() * 101);
if (age < 2) {
    alert("Baby");
  } else if (age >= 2 && age <= 12) {
    alert("child");
  } else if (age >= 13 && age <= 19) {
    alert("teen");
  } else if (age >= 20 && age <= 30) {
    alert("young");
  } else if (age >= 31 && age <= 60) {
    alert("Adult");
  } else if (age >= 61 && age <= 75) {
    alert("elderly");
  } else {
    alert("old man");
  }
  console.log('exercise 4.B: ' +age);