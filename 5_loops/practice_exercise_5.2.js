// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 5.2

// In this exercise, we will create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.

// Set the starting counter to 0
// Create a variable, step, to increase your counter by
// Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop
// Continue to loop until the counter is equal to 100 or more than 100

let counter = 0;

let step = 2;

do {
  counter = counter + step;
  console.log(counter);
} while (!(counter >= 100));
