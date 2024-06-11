// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 4.5

// Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
let prize = prompt("Type here a number between 0 and 10");

// Convert the prompt response to a number data type
prize = Number(prize);

// Create a variable to use for the output message containing the value "My Selection: "
let message = "My Selection: ";

// Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
// Use the switch break to add combined results for prizes
youWon = "";

switch (prize) {
  case 0:
  case 4:
    youWon = "a postcard with cat";
    break;
  case 1:
  case 7:
    youWon = "a sloth toy";
    break;
  case 2:
    youWon = "a pocket mirror";
    break;
  case 3:
  case 5:
    youWon = "a lollypop";
    break;
  case 6:
  case 10:
    youWon = "m&m";
    break;
  case 8:
    youWon = "a temporary tattoo sticker";
    break;
  case 9:
    youWon = "a rubber duck";
    break;
}

// Output the message back to the user by concatenating your prize variable strings and the output message string
console.log(message + youWon);

alert(message + youWon);
