// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements. You can add a default response that you don't know the person if it's an unknown name. Output the result into the console.

let nameFromAUser = prompt("Type a name here");

let messageForUser = "";

switch (nameFromAUser) {
  case "Alan":
  case "Don":
  case "Bred":
  case "Sofi":
  case "Monica":
  case "Elen":
    messageForUser = "Hi my dear friend, ";
    break;
  default:
    messageForUser = "Sorry, you are not my friend, ";
    break;
}

console.log(`${messageForUser}${nameFromAUser}`);
alert(`${messageForUser}${nameFromAUser}!`);
