// function factorial(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//        // console.log(i, fact);
//     }
//   return fact;
// }
// const result = factorial(5);
// console.log(result);

// //while loop //
// function factorial(n) {
//   var i = 1;
//   let fact = 1;
//   while (i <= n) {
//     fact = fact * i;
//     //console.log(i);
//     i++
//   }
//   return fact;
// }

// const result = factorial(6);
// console.log(result);


// Recursive //
function factorial(n){
  if (n == 0 || n == 1){
    return 1;
  }
  else{
    return n * factorial(n -1);
  }
}
var result = factorial(6);
console.log(result);