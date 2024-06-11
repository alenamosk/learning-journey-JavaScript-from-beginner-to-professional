// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Rock Paper Scissors game

// This is a game between a player and the computer, where both will make a random selection of either Rock, Paper, or Scissors (alternatively, you could create a version using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. You can use JavaScript to create your own version of this game, applying the logic with an if statement. Since this project is a little more difficult, here are some suggested steps:

// Create an array that contains the variables Rock, Paper, and Scissors.
let options = ["Rock", "Paper", "Scissors"];

// Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
// let player = prompt(
//   "Please, choose and type here 'rock', 'paper' or 'scissors'"
// );
let player = Math.floor(Math.random() * 3);

let computer = Math.floor(Math.random() * 3);

// Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
let response = "";

// Create a condition to handle the player and computer selections. If both are the same, this results in a tie.

// Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.

if (player > computer || (player === 0 && computer === 2)) {
  response = "Player is win!";
} else if (computer > player || (computer === 0 && player === 2)) {
  response = "Computer is win!";
} else if (computer === player) {
  response = "The result is a tie!";
}

if (player >= 0 && player < options.length) {
  player = options[player];
} else {
  console.log("Something went wrong");
}

if (computer >= 0 && computer < options.length) {
  computer = options[computer];
} else {
  console.log("Something went wrong");
}

// Add a new output message that shows the player selection versus the computer selection and the result of the game.
console.log(
  `Computer's chose is ${computer}. Player's chose is ${player}. ${response}`
);
