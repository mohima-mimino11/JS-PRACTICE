/**
 * create function that will return only the even numbers and return the sum of even numbers.
 */

function evenNumbersOnly(numbers){
  for(const num of numbers){
    if(num % 2 === 0){
      console.log(num);
    }
    
    
  }
}

const numbers = [5, 8, 91, 24, 6];
// evenNumbersOnly(numbers);
// console.log();

function sumOfEvenNumbers(numbers){
  let sum = 0
  for(const num of numbers){
    if(num % 2 === 0){
      console.log(num);
      sum += num;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log(`sum of even numbers is ${sum}`);

