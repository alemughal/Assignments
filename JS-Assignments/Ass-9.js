// Function for Capitalize the first letter of each word in a string

var string = prompt("Enter a string: ");

function capitalize(str){
    var words = str.split(" ");
    var newArray = [];
    for(var word of words){
        var firstChar = word.substring(0, 1);
        firstChar = firstChar.toUpperCase();
        var restleters = word.substring(1);
        newArray.push(firstChar + restleters);
    }
    return newArray.join(" ");
}

console.log(capitalize(string));

// Function to fictorial of a number

var num = parseFloat(prompt("Enter a number: "));
function factorial(num){
    var fact = 1;
    for(var i = 1; i<=num; i++){
        fact *= i;
    }
    return fact;
}

console.log(factorial(num));
