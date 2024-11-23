/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
*/
function celsiusToFahrenheit(temparature){
  const fahrenheit = temparature * (9 / 5) + 32;
  const result = `${fahrenheit} degree F`;
  return result;
}

const fahrenheit = celsiusToFahrenheit(45)
// console.log(fahrenheit);

/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 * sample-input: numbers = [5,6,11,12,98, 5]
  find: 5
  output: 2
 */

  function countOccurrences(numbers, target) {
   
    let count = 0;

   
    for (let num of numbers) {
        if (num === target) {
            count++;
        }
    }

   
    return count;
}


const numbers = [5, 6, 11, 12, 98, 5];
console.log(countOccurrences(numbers, 5));  
console.log(countOccurrences(numbers, 25)); 

/**
 * Write a function to count the number of vowels in a string.
 */
