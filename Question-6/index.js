var readline = require('readline-sync');

var namesOfStudents = [];
var unitTestMarks = [];
var preFinalTestMarks = [];
var finalMarks = [];

function findIndexOfHighestMarks(inputArray) {
  return inputArray.reduce((indexMax, x, i, arr) => x > arr[indexMax]?i:indexMax, 0);
}

function findAverageMarks(inputArray) {
  return inputArray.reduce((sum, i, arr) => sum + arr[i], 0) / arr.length;
}

for(let i = 0; i<5; i++) {
  namesOfStudents[i] = readline.question("Enter name of Student " + (i+1) + " ");
  unitTestMarks[i] = Number(readline.question("Enter Unit Test Marks "));
  preFinalTestMarks[i] = Number(readline.question("Enter pre-Final Test Marks "));
  finalMarks[i] = Number(readline.question("Enter final Test marks "));
}

var indexOfHighestMarks = 0;

// Highest marks in Final Test
indexOfHighestMarks = findIndexOfHighestMarks(finalMarks);

console.log("Student with Highest Marks in Finals: " + namesOfStudents[indexOfHighestMarks]);

// Highest marks in Pre-Final Test
indexOfHighestMarks = findIndexOfHighestMarks(preFinalTestMarks);

console.log("Student with Highest Marks in Pre-Final: " + namesOfStudents[indexOfHighestMarks]);


// Highest marks in Unit Test
indexOfHighestMarks = findIndexOfHighestMarks(unitTestMarks);

console.log("Student with Highest Marks in Unit Test: " + namesOfStudents[indexOfHighestMarks]);

// Average marks in Unit Test
console.log("Average Marks in Unit Test: " + findAverageMarks(unitTestMarks));

// Average marks in Pre-Final Test
console.log("Average Marks in Pre-Final Test: " + findAverageMarks(preFinalTestMarks));

// Average marks in Unit Test
console.log("Average Marks in Final Test: " + findAverageMarks(finalMarks));