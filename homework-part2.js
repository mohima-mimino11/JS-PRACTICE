/**
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */
const heights2 = [167, 190, 120, 165, 137];

function getLowest(numbers){
  let lowest = numbers[0];
  for(const num of numbers){
    if(num < lowest){
      lowest = num;
    }
  }
  return lowest;
}

const lowest = getLowest(heights2);
// console.log(lowest);

/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getLowestString(numbers){
  let lowest = numbers[0];
  for(const num of numbers){
    if(num.length < lowest.length){
      lowest = num;
    }
  }
  return lowest;
}

const minimum = getLowestString(heights3);
console.log(minimum);


/**
 * 
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */