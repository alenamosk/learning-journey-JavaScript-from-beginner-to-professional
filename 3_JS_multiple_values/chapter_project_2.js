// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Company product catalog

// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.

// Create an array to hold an inventory of store items.

let inventoryOfStore = [];
// Create three items, each having the properties of name, model, cost, and quantity.
let item1 = {
  itemName: "Airbus toy",
  model: "A-380",
  quantity: 20,
};

let item2 = {
  itemName: "Boeing toy",
  model: "747-236B",
  quantity: 7,
};

let item3 = {
  itemName: "Helicopter toy",
  model: "Elicottero-3e",
  quantity: 13,
};
// Add all three objects to the main array using an array method, and then log the inventory array to the console.
inventoryOfStore.push(item1, item2, item3);
console.log(inventoryOfStore);

// Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.
console.log(inventoryOfStore[2].quantity);

let item4 = {
  itemName: "Gemini Jets toy",
  model: "GJDAL2102",
  quantity: 2,
};

inventoryOfStore.unshift(item4);
console.log(inventoryOfStore);

inventoryOfStore[1].discount = "5%";
console.log(
  `${inventoryOfStore[1].itemName} of model ${inventoryOfStore[1].model} has a discount ${inventoryOfStore[1].discount}`
);
