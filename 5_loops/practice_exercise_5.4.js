// Exercise from the book "JavaScript from Beginner to Professional"
// Authors: Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival
// Link to the book: https://learning.oreilly.com/library/view/javascript-from-beginner/9781800562523/

// Practice exercise 5.4

// In this exercise we will be generating a table of values. We will be using loops to generate rows and also columns, which will be nested within the rows. Nested arrays can be used to represent rows in a table. This is a common structure in spreadsheets, where each row is a nested array within a table and the contents of these rows are the cells in the table. The columns will align as we are creating an equal number of cells in each row.

// To create a table generator, first create an empty array, myTable, to hold your table data.
let myTable = [];

// Set variable values for the number of rows and columns. This will allow us to dynamically control how many rows and columns we want within the table. Separating the values from the main code helps make updates to the dimensions easier.
let rows = 6;
let columns = 7;

// Set up a counter variable with an initial value of 0. The counter will be used to set the content and count the values of the cells within the table.
let counter = 0;

// Create a for loop with conditions to set the number of iterations, and to construct each row of the table. Within it, set up a new temporary array (tempTable) to hold each row of data. The columns will be nested within the rows, generating each cell needed for the column.
// Nest a second loop within the first to count the columns. Columns are run within the row loop so that we have a uniform number of columns within the table.
// Increment the main counter each iteration of the inner loop, so that we track a master count of each one of the cells and how many cells are created.
// Push the counter values to the temporary array, tempTable. Since the array is a nested array representing a table, the values of the counter can also be used to illustrate the cell values next to each other in the table. Although these are separate arrays representing new rows, the value of the counter will help illustrate the overall sequence of cells in the final table.
// Push the temporary array to the main table. As each iteration builds a new row of array items, this will continue to build the main table in the array.
// Output into the console with console.table(myTable). This will show you a visual representation of the table structure.
for (let x = 0; x < rows; x++) {
  let tempTable = [];

  for (let y = 0; y < columns; y++) {
    tempTable.push(counter);
    counter++;
  }
  myTable.push(tempTable);
}

console.table(myTable);
