/**
 * Simple Logic:
 *year will be a leap year if the year is divisible by 4.
 */

function isLeapYear(year){
  if(year % 4 === 0){
    return true;
  }else{
    return false;
  }
}

const isLeap = isLeapYear(2052);
// console.log(isLeap);


/**
 * 1. Those year that is not divisible by 100 and if they're divisible by 4 then it will be a leap year.
 * 2. if the year is divisible by 400 then it is a leap year.
 * 3. else it is not a leap year
 */
function isLeapYear2(year){
  if(year % 100 !== 0 && year % 4 === 0){
    return true;
  }else if(year % 400 === 0){
    return true;
  }else{
    return false;
  }
}

const isLeap2 = isLeapYear2(2100);
const isLeap3 = isLeapYear2(2400);
const isLeap4 = isLeapYear2(1900);
const isLeap5 = isLeapYear2(2052);
console.log(isLeap2, isLeap3, isLeap4, isLeap5);
