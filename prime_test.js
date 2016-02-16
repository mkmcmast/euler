// Primality Test

function primality(num) {
    for(var i=2; i<Math.sqrt(num); i++){
        if(num%i === 0) {
            return console.log(num + " Is Not Prime");
        } 
    }
    return console.log(num +" Is Prime Time");
}
primality(53);

// a prime number is only evenly divisible by 1 and itself

function primality(num) {
    for(var i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0) {
            return false;
        } 
    }
    return true;
}
primality(77);

