/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// for(let i = 1; i <= 60; i++){
//   console.log("I will invest at least 6 hrs every single day for next 60 days!");
// }
// let i = 1;
// while(i <= 60){
//   console.log("I will invest at least 6 hrs every single day for next 60 days!");
//   i++;
// }

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
// for(let i = 61; i <= 100; i++){
//   if(i % 2 !== 0){
//     console.log(i);
    
//   }
// }
// let i = 61;
// while(i <= 100){
//   if(i % 2 !== 0){
//     console.log(i);
        
//   }
//   i++
// }

// for(let i = 78; i <= 98; i++){
//   if(i % 2 === 0){
//     console.log(i);
    
//   }
// }

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
// let sum = 0;
// for(let i = 91; i <= 129; i++){
//   if(i % 2 !== 0){
//     sum += i;
//   }
// }
// console.log(sum);

// let sum = 0;
// for(let i = 51; i <= 85; i++){
//   if(i % 2 === 0){
//     sum += i;
//   }
// }
// console.log(sum);

/***

Generate a multiplication table for number 9

 */
// const number = 9;

// console.log(`Multiplication Table for ${number}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// const number = 9;
// let i = 1;
// console.log(`Multiplication Table for ${number}:`);
// while(i <= 10){
//   console.log(`${number} x ${i} = ${number * i}`);
//   i++;
// }
/***

Implement a countdown timer that counts down from 81 to 65.

 */
// for(let i = 81; i >= 65; i--){
//   console.log(i);
// }
// let i = 81;
// while(i >= 65){
//   console.log(i);
//   i--;
// }

/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
// for(let i = 1; i <= 200; i++){
//   if(i > 100){
//     break;
//   }
//   console.log(i);
// }

// 

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let i = 1;
// let sum = 0;
// while(i <= 20){
//   sum += i;
//   i++;
//   if(sum > 100){
//     break;
//   }
// }
// console.log(sum);


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// for (let i = 2; i <= 100; i++) {
//   if (Math.sqrt(i) % 1 === 0) { // Check if 'i' is a square number
//     console.log(`First square number found: ${i}`);
//     break; // Exit the loop when the condition is met
//   }
//   console.log(i);
// }

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for(let i = 1; i <= 40; i++){
//   if(i % 2 !== 0){
//     continue;
//   }
//   console.log(i);
  
// } 

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for(let i = 55; i <= 85; i++){
  if(i % 5 === 0){
    continue;
  }
  if(i % 2 !== 0){
    console.log(i);
    
  }
}