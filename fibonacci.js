function firstNFibonacciNumbers(n) {
    let firstTerm = 0, secondTerm = 1, nextTerm = 0;
    for (let i = 1; i <= n; i++) {
        console.log(firstTerm);
        nextTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }


}
firstNFibonacciNumbers(process.argv[2]); 
