// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 5.1

// In this exercise we will create a number guessing game that takes user input and replies based on how accurate the user's guess was.

// Create a variable to be used as the max value for the number guessing game.
let maxValue = 0;

// Generate a random number for the solution using Math.random() and Math.floor(). You will also need to add 1 so that the value is returned as 1-[whatever the set max value is]. You can log this value to the console for development to see the value as you create the game, then when the game is complete you can comment out this console output.
let randonNumber = Math.floor(Math.random() * 5) + 1;

// Create a variable that will be used for tracking whether the answer is correct or not and set it to a default Boolean value of false. We can update it to be true if the user guess is a match.
let answerIsCorrect = false;

// Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5, and convert the response into a number in order to match the data type of the random number.
// Inside the while loop, check using a condition to see if the prompt value is equal to the solution number. Apply logic such that if the number is correct, you set the status to true and break out of the loop. Provide the player with some feedback as to whether the guess was high or low, and initiate another prompt until the user guesses correctly. In this way we use the loop to keep asking until the solution is correct, and at that point we can stop the iteration of the block of code.
while (maxValue < 7 && answerIsCorrect === false) {
  let numberFromTheUser = prompt("Enter a number between 1 and 5");
  numberFromTheUser = Number(numberFromTheUser);
  console.log(
    `${numberFromTheUser} - user's number, ${randonNumber} - computer's number`
  );

  if (numberFromTheUser === randonNumber) {
    answerIsCorrect = true;
    alert("Your answer is correct");
  } else if (numberFromTheUser > randonNumber) {
    alert("Your guess was high");
  } else if (numberFromTheUser < randonNumber) {
    alert("Your guess was low");
  }
  maxValue++;
}
