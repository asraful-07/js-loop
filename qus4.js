/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.


let sum = 0;

for(let i = 206; i <= 311; i++){
    if(i % 2 === 0){
    console.log(i)
    sum = sum + i;
    console.log('total:', sum)
    }
}
console.log('total sum:', sum)

// while loop

let num = 206;
let sum = 0;

while(num <= 311){
    if(num % 2 ===0){
    console.log(num)
    sum = sum + num;
    console.log('total:',sum);
    }
    num++;
}
console.log('total sum:',sum);


*/
 /*programming hero*/



 /*******************************************************************************************************/

// break task

/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for(let i = 1; i <= 200; i++){
//     console.log(i);
//     if(i >= 100){
//         break;
//     }
// }

// while loop 

// let n = 1;

// while(n <= 200){
//     console.log(n);
//     if( n >= 100){
//         break;
//     }
    
//     n++;
// }

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters
the first square number (like 4, 9, 16, etc.)
*/