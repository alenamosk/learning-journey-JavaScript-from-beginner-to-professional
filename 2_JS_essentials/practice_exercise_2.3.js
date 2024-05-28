// Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. The theorem specifies that the relation between the sides of a right-angled triangle is a**2 + b**2 = c**2.

let a = prompt("Enter the length of side 'a'");
let b = prompt("Enter the length of side 'b'");

let squareA = a ** 2;
let squareB = b ** 2;

let result = squareA + squareB;

console.log(
  `The hypotenuse of your triangle (with side a = ${a} and side b = ${b}) is ${result}`
);

alert(
  `The hypotenuse of your triangle (with side a = ${a} and side b = ${b}) is ${result}`
); // in order to show it not just in the console
