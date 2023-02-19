function firstNFibonacciNumbers(n) {
    let arr=[];
    let firstTerm = 0, secondTerm = 1, nextTerm = 0;
    for (let i = 0; i < n; i++) {
        // console.log(firstTerm);
         arr.push(firstTerm);
        nextTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }
    return arr;


}
let result=firstNFibonacciNumbers(process.argv[2]); 
console.log(result);
