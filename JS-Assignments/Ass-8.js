var name = prompt("Enter your name: ");

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';


console.log("Hello"+ " " + name + " " +  greet); 

var d1 = prompt("Enter your date of birth: ");
var m1 = prompt("Enter your month of birth: ");
var y1 = prompt("Enter your year of birth: ");
var dob = d1 + "/" + m1 + "/" + y1;
console.log("Your date of birth is: " + dob);

var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


if(d1 > d2){
  d2 = d2 + month[m2 - 1];
  m2 = m2 - 1;
}
if(m1 > m2){
  m2 = m2 + 12;
  y2 = y2 - 1;
}

var d = d2 - d1;
var m = m2 - m1;
var y = y2 - y1;

console.log("Your age is: " + y + " years " + m + " months " + d + " days");

