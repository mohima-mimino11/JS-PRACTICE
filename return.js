// function tenTimes(number){
//   const result = number * 10;
//   return  result;
// }



// function cutHalf(num){
//   const half = num / 2;
//   return half;
// }

// const result = tenTimes(5);

// console.log(result);
// console.log(cutHalf(6));


function add(price1, price2){
  const total = price1 + price2;
  return total;
}

const bill = add(5,80);

function add2(price1, price2){
  return price1 + price2;
}

const bill2 = add2(8, 10);

// console.log(bill);
// console.log(bill2);

function doMath(num1, num2){
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 2;
  return result;
}

const result = doMath(10, 5);
// console.log(result);

function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  return false;
}

// console.log(isEven(5));
// console.log(isEven(10));

function isOdd(number){
  if(number % 2 !== 0){
    return true;
  }
  return false;
}

console.log(isOdd(7));
console.log(isOdd(12));



