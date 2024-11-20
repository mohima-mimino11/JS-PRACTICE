/**
 * for a given string tell me whether it has even number of characters or not
 * 
 */

function evenSizedString(str){
  const size = str.length;
  console.log(str, size);
  if(size % 2 === 0){
    return true;
  }
  return false;
  
  
}

// console.log(evenSizedString('dhaka'));
// console.log(evenSizedString('Kaka'));

function doubleOrTriple(number, doDouble){
  if(doDouble){
    const result = number * 2;
    return result;
  }else{
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers){
  const len = numbers.length;
  return len;
}

console.log(numberOfElements([12, 45, 78, 43, 124, 4]));


