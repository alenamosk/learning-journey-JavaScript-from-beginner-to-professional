// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 4.2

// Create a prompt to ask the user's age
let usersAge = prompt("How old are you?");

// Convert the response from the prompt to a number
usersAge = Number(usersAge);

// Declare a message variable that you will use to hold the console message for the user
let message;

// If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
// If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol
// Provide a default else statement to set the message variable to deny entry if none are true
if (usersAge >= 21) {
  message = "You can entry to a venue and are abile to purchase alcohol";
} else if (usersAge >= 19) {
  message = "You can entry to a venue, but can't purchase alcohol";
} else {
  message = "Sorry, you can't entry to a venue";
}
// Output the response message variable to the console
console.log(message);
