// odd numbers
/** 
 * 
 * 
for(let i = 0; i <= 20; i+=2){
        console.log(i);
}
*
*
 */
// if (i%2 === 1) bhjor ar khtre
let total = 0;

for(let i = 0; i <= 20; i++){
    if( i%2 === 0 || i%4 === 0){
        console.log(i);
        total = total + i;
    }
}

console.log('total', total);

// 2nd 
// for(let i = 1; i <= 30; i++){
//     if(i % 4 === 0){
//         console.log(i);
//     }
// }