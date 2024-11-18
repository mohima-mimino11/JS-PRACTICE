/**
 * Ternary ---> three parts
 * 
 *   ?      :
 *  condition ? do something when true : do something when false
 */

const age = 22;
// if(age >= 18){
//   console.log('you can vote');
// }else{
//   console.log('Ghumai Thako');
  
// }

// simple ternary 
// age >= 18 ? console.log('you can vote') : console.log('Ghumai Thako');

let price = 1500;
const isLeader = false;

// price= isLeader === true ? console.log(0): console.log(price+100);

// Optional: semi-advanced
// if(isLeader === true){
//   if(price > 1000){
//     price = price / 2;
//   }
//   else{
//     price = 0;
//   }
// }
// else{
//   price = price + 100;
// }
// price > 1000 ? price / 2 : 0

price = isLeader === true ? (price > 1000 ? price / 2: price=0) : price+1000;
console.log(price);


