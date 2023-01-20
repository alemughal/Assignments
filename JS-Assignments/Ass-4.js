// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
alert(`${number1} ${operator} ${number2} = ${result}`);


// Second Assignment

var course1 = parseInt(prompt("Enter marks of course 1"));
var course2 = parseInt(prompt("Enter marks of course 2"));
var course3 = parseInt(prompt("Enter marks of course 3"));
var course4 = parseInt(prompt("Enter marks of course 4"));
var course5 = parseInt(prompt("Enter marks of course 5"));
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;
alert("Your total marks are " + obtainedMarks + " and your percentage is " + percentage + "%");