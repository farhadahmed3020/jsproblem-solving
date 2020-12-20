// function fibonacci(num) {
//     var fibo = [0, 1];
//     for (var n = 2; n <= num; n++) {
//         fibo[n] = fibo[n - 1] + fibo[n - 2]
//     }
//     return fibo;
// }
// var result = fibonacci(12)
// console.log(result);

function fibonacci(n){
    if(n == 0){
        return 0 ;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n -2);
    }
}
var result = fibonacci(10);
console.log(result);