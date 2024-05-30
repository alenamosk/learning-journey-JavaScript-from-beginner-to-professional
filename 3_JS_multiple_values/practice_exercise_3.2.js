// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Create an empty array to use as a shopping list.
let shoppigList = [];

// Add Milk, Bread, and Apples to your list.
shoppigList.push("Milk", "Bread", "Apples");

// Update "Bread" with Bananas and Eggs.
shoppigList.splice(1, 1, "Bananas", "Eggs");

// Remove the last item from the array and output it into the console.
let removedLastItem = shoppigList.pop();
console.log(removedLastItem);

// Sort the list alphabetically.
shoppigList.sort();

// Find and output the index value of Milk.
let indexOfMilk = shoppigList.indexOf("Milk");
console.log(indexOfMilk);

// After Bananas, add Carrots and Lettuce.
let indexOfBananas = shoppigList.indexOf("Bananas");
console.log(indexOfBananas);
shoppigList.splice(1, 0, "Carrots", "Lettuce");
console.log(shoppigList);

// Create a new list containing Juice and Pop.
let newShoppingList = ["Juice", "Pop"];

// Combine both lists, adding the new list twice to the end of the first list.
let bothShoppingLists = shoppigList
  .concat(newShoppingList)
  .concat(newShoppingList);
console.log(bothShoppingLists);

// Get the last index value of Pop and output it to the console.
let lastIndexOfPop = bothShoppingLists.lastIndexOf("Pop");
console.log(lastIndexOfPop);
