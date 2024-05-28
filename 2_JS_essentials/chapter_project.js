// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the value in kilometers in the following format: The distance of 130 kms is equal to 209.2142 miles

let valueInMiles = 209.2142;

let oneMileToKm = 1.60934;

let resultInKm = valueInMiles / oneMileToKm;

console.log(
  `The distance of ${resultInKm} kms is equal to ${valueInMiles} miles`
);

// BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the results to the console:

// 1 inch is equal to 2.54 cm
// 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.

let heightInches = 63.5;
let weightInPounds = 118;

let oneInchToCm = 2.54;
let oneKiloToPounds = 2.2046;

console.log(`1 inch is equal to ${oneInchToCm}`);
console.log(`${oneKiloToPounds} pounds is equal to 1 kilo`);

let heightInCm = heightInches * oneInchToCm;
let weightInKilos = weightInPounds / oneKiloToPounds;

console.log(
  `Your height in cm is ${heightInCm}, your weight in kilos is ${weightInKilos}`
);

let BMI = weightInKilos / (heightInCm / 100) ** 2;
console.log(`Your BMI is ${BMI}`);
