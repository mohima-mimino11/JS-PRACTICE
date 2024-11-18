//Add element to front of array
var numbers = ["2", "3", "4", "5"];
numbers.unshift("1");
//Result - numbers: ["1", "2", "3", "4", "5"]

var colors = ["red", "blue", "green"]

var firstColor = colors.shift()

console.log(firstColor) // red
console.log(colors) // blue green