let a = 5;

let b = 7;

console.log(a, b);


let temp = a;
a = b; 
b = temp;

console.log(a, b);


// --------------------------------
let x = 3;
let y = 9;
console.log(x, y);

// destructing
[x, y] = [y, x];
console.log(x, y);