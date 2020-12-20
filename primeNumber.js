
function isPrime(n){
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
            
        } 
    }
    return 'Your number is a Prime Number';
}
const result =isPrime(17);
console.log(result);