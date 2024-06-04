// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 4.1

// Create a variable with a Boolean value.
let avaliableClasses = true;

// Output the value of the variable to the console.
console.log(avaliableClasses);

// Check whether the variable is true and if so, output a message to the console, using the following syntax: if(myVariable){action}
if (avaliableClasses) {
  console.log("You have available classes");
}

// Add another if statement with an ! in front of the variable to check whether the condition is not true, and create a message that will be printed to the console in that instance. You should have two if statements, one with an ! and the other without. You could also use an if and an else statement instead—experiment!
if (!avaliableClasses) {
  console.log("You have to pay your subscription");
}

//if and an else statement
if (avaliableClasses) {
  console.log("You have available classes");
} else {
  console.log("You have to pay your subscription");
}

// Change the variable to the opposite to see how the result changes.
avaliableClasses = false;

if (avaliableClasses) {
  console.log("You have available classes");
} else {
  console.log("You have to pay your subscription");
}
