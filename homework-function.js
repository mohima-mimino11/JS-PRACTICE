// Take four parameters. Multiply the four numbers and then return the result

function multiplication(num1, num2, num3, num4){
  const result = num1 * num2 * num3 * num4;
  return result;
}

// console.log(multiplication(3, 6, 9, 12));

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddOrEven(num){
  if(num % 2 !== 0){
    const result = num * 2;
    return result;
  }else{
    const result = num / 2;
    return result;
  }
}

// console.log(oddOrEven(8));
// console.log(oddOrEven(5));

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers, len){
  let sum = 0;
  for(const num of numbers){
    if(len === 0){
      return 0;
    }
    sum += num;
  }
  return sum / len;
}

const numbers = [10, 12, 15, 44, 88]
const size = numbers.length;

// console.log(make_avg(numbers, size));

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.





