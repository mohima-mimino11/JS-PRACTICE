/**
 * array has some duplicate elements
 * []
 */

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61, 7]
function noDuplicate(array){
  // console.log(array);
  const unique = [];
  for(const item of array){
    if(unique.includes(item) === false){
      unique.push(item);
    }
  }
  return unique;
}
const uniqueArray = noDuplicate(biryaniKhor);
const uniqueArray2 = noDuplicate(numbers);

console.log(uniqueArray);
console.log(uniqueArray2);

