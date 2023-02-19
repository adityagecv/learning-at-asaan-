function isPrime(n) {
    if (n <= 0) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
        
    }
    return true;
}
let v=isPrime(process.argv[2]);
console.log(v);