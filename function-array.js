/**
 * Objective: write a function to give me the sum of all numbers in an array.
 */

function sumOfNumbers(numbers){
  console.log(numbers);
  let sum = 0;
  for(let num of numbers){
    console.log(num);
    sum += num;
  }
  return sum;
}

const nums = [54, 62, 12, 6];
const sum = sumOfNumbers(nums);
console.log(`Sum of numbers is ${sum}`);
