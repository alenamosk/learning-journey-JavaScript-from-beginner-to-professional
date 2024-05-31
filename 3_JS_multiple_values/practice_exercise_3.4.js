// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 3.4
// Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
let myCar = {
  make: "Renalut",
  model: "Kwid",
  launched: 2015,
  color: "red",
  class: "crossover city car",
  isPetrolEngine: true,
};
// Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
let newVar = "color";
myCar[newVar] = "green";
console.log(myCar);

// Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
newVar = "forSale";
myCar[newVar] = true;
console.log(myCar);

// Output make and model into the console.
console.log(`Make - ${myCar.make}, model - ${myCar["model"]}`);

// Output the value of forSale into the console.
console.log("The value of forSale is", myCar[newVar]);
