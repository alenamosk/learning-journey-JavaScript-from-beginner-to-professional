// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 3.5
// Create an object named people that contains an empty array that is called friends.
const people = {
  friends: [],
};
// Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
let friendOne = {
  firstName: "Pasha",
  lastName: "Ivanov",
  id: 1,
};

let friendTwo = {
  firstName: "Olga",
  lastName: "Smirnova",
  id: 2,
};

let friendThree = {
  firstName: "Peter",
  lastName: "Sidorov",
  id: 3,
};

// Add the three friends to the friend array.
people.friends.push(friendOne, friendTwo, friendThree);

// Output it to the console.
console.log(people.friends);
