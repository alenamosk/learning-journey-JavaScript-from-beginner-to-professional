// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 3.3

// Create an array containing three values: 1, 2, and 3.
let arr = [1, 2, 3];

// Nest the original array into a new array three times.
let arrOfarr = [arr, arr, arr];

// Output the value 2 from one of the arrays into the console.
// I am going to output the value of two from the third array.
let valueOf2 = arrOfarr[2][1];
console.log(valueOf2);
