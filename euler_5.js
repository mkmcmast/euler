/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
/*
create a loop that goes from say 2520 up to maybe a million or so that checks to see if the numbers 1 through 20
can divide evenly into it, when all of the conditions are met then return that number
*/
function dick() {
    for(var i=100000000; i<=400000000;i++) {
        if(i%20===0 && i%19===0 && i%18===0 && i%17===0 && i%16===0 && i%15===0 
        && i%14===0 && i%13===0 && i%12===0 && i%11===0 && i%10===0 && i%9===0 && i%8===0
        && i%7===0 && i%6===0 && i%5===0 && i%4===0 && i%3===0) {
            console.log(i);
        }
    }
    
    
}
dick();