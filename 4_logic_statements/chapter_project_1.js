// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Evaluating a number game

// Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user.

let userNumber = prompt("Please, type a number between 0 and 99");

userNumber = Number(userNumber);

let myDynamicNumber = Math.floor(Math.random() * 100);

let result = "";

if (userNumber > myDynamicNumber) {
  result = "Your number is greater than my number.";
} else if (userNumber < myDynamicNumber) {
  result = "Your number is less than my number.";
} else if (userNumber === myDynamicNumber) {
  result = "Your number is equal to my number.";
} else {
  result = "Something went wrong.";
}

console.log(
  `You typed: ${userNumber}.\nI chose: ${myDynamicNumber}.\n${result}`
);
alert(`You typed: ${userNumber}.\nI chose: ${myDynamicNumber}.\n${result}`);
