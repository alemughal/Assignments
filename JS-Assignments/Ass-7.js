var num = parseFloat(prompt("Enter a number: "));
num = Math.ceil(num);
alert(num);
var text = "This is the dummy text";
var sliceText = text.slice(0, num);
var strlen = sliceText.length;
var revStr = "";

for (var i = strlen-1; i>=0; i--){
    revStr += sliceText[i];
} 
alert(revStr);

// Second Assignment

var inputValue = prompt("Enter a string: ");
var words = inputValue.split(" ");
var newArray = [];

for(var word of words){
    var firstChar = word.substring(0, 1);
    firstChar = firstChar.toUpperCase();
    var restleters = word.substring(1);
    newArray.push(firstChar + restleters);
    
}

console.log(newArray.join(" "));