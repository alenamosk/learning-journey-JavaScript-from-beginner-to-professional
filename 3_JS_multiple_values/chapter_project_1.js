// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Manipulating an array

// Take the following array: const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), and transform it into the following:["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// You can take the following steps, or adopt your own approach:
const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

// Remove the first item and the last item.
theList.shift();

theList.pop();
// Add FIRST to the start of the array.
theList.unshift("First");

// Assign hello World to the fourth item value.
theList[3] = "hello World";
// Assign MIDDLE to the third index value.
theList[2] = "MIDDLE";

// Add LAST to the last position in the array.
theList.push("LAST");
// Output it to the console.
console.log(theList);

// We can't transform the array into this array ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"] with an approach mentioned in the book, because we will still have 3 extra items (null, undefined, { test: 'one', score: 55 }). In order to get rid of it we can use three times .pop() method or use another method that we read about earlier - .splice().
theList.splice(4, 3);
console.log(theList);
