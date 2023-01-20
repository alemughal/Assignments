var course1 = parseInt(prompt("Enter marks of course 1"));
var course2 = parseInt(prompt("Enter marks of course 2"));
var course3 = parseInt(prompt("Enter marks of course 3"));
var course4 = parseInt(prompt("Enter marks of course 4"));
var course5 = parseInt(prompt("Enter marks of course 5"));
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;
console.log(percentage)

switch (true) {
    case (percentage >= 100):
        console.log("A+")
        break;
    case (percentage >= 90):
        console.log("A")
        break;
    case (percentage >= 80):
        console.log("B")
        break;
    case (percentage >= 70):
        console.log("C")
        break;
    case (percentage >= 60):
        console.log("D")
        break;
    case (percentage >= 33):
        console.log("E")
        break;
    default: console.log("Fail")
}