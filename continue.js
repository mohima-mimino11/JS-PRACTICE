// continue ---> skip rest of the code for this iteration
// break ----> i am done with this loop. loop end. 


// var numbers = [45, 87, 89, 56, 32, 51, 25,188, 41, 225];

// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 100){
//         continue;
//     }
//     console.log(number);
// }


for(let i = 1; i < 10; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
    
}