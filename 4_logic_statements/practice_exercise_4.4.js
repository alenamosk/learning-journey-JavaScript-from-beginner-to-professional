// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 4.4

// As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number between 0 and 9:
// random number between 0 and 1
// let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber);

// In this exercise, we'll create a Magic 8-Ball random answer generator:

// Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
let varWithRandomValue = Math.floor(Math.random() * 6);

// Create a prompt that can get a string value input from a user that you can repeat back in the final output.
let inputFromUser = prompt(
  "Welcome to the 'Magic 8-Ball random answer generator'!\nPlease, enter your question here\n(it should be 'yes/no question')"
);

let response = "";

// Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
switch (varWithRandomValue) {
  case 0:
    response = "Yes";
    break;
  case 1:
    response = "No";
    break;
  case 2:
    response = "You'd better be joking";
    break;
  case 3:
    response = "You know better";
    break;
  case 4:
    response = "Maybe, but think twice";
    break;
  case 5:
    response = "Hell, no!";
    break;
  case 6:
    response = "Hmmm, I guess so";
    break;
  default:
    response = "Something went wrong. Try later.";
    break;
}

// Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.

// Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.

console.log(`Your question is: ${inputFromUser}\nThe answer is: ${response}`);

alert(`Your question is: ${inputFromUser}\nThe answer is: ${response}`);
