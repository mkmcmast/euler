function isPrime(num) {
    for(var i =2; i<=Math.sqrt(num);i++) {
        if(num%i === 0) {
            return false;
        }
    } 
    return true;
}

var counter = 0;
function primeSum() {
    for(var i=2; i<2000000; i++) {
        
        if(isPrime(i) === true) {
            counter = i+counter;
    } 
} console.log(counter);
}
primeSum();