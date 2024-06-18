// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 5.3

// In this exercise we will use a for loop to create an array that holds objects. Starting with creating a blank array, the block of code within the loop will create an object that gets inserted into the array.

// Setup a blank array, myWork.
let myWork = [];

// Using a for loop, create a list of 10 objects, each of which is a numbered lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false status for every other item to indicate whether the class will be running this year. For example: name: 'Lesson 1', status: true

// This is what comes to my mind first
// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     myWork.push({ name: `Lesson ${i}`, status: true });
//   } else {
//     myWork.push({ name: `Lesson ${i}`, status: false });
//   }
// }
// console.log(myWork);

// You can specify the status by using a ternary operator that checks whether the modulo of the given lesson value is equal to zero and by setting up a Boolean value to alternate the values each iteration.
// Create a lesson using a temporary object variable, containing the name (lesson with the numeric value) and predefined status (which we set up in the previous step).
// Push the objects to the myWork array.
// Output the array to the console.

// This is after reading suggestion for the solution
for (let i = 1; i < 11; i++) {
  let status = i % 2 ? true : false;
  let objVar = {
    name: `Lesson ${i}`,
    status: status,
  };
  myWork.push(objVar);
}
console.log(myWork);
