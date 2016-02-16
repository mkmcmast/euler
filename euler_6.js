/*The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
/*
make an array of 1 through 100,
then make a function that squares each number, then adds those numbers together and stores them in a variable
then add up the numbers of 100 factorial
then subtract the two
*/

function squareSum() {
    var counter =0;
	for(var i=1;i<=100;i++) {
	    var x= Math.pow(i,2);
	    var y = x+=counter;
	}
    
}
squareSum();
------------
function squareSum() {
    var counter =0;
    for(var i=1;i<=100;i++) {
	    var x= Math.pow(i,2);
	    counter +=x;
	}
    return(counter);
}
squareSum();

function addSum() {
	var counter=0;
	for(var i=0; i<=100; i++) {
		counter += i;
	}
	return counter;
}
------------------
function squareSum() {
    var counter =0;
    for(var i=1;i<=100;i++) {
        var x= Math.pow(i,2);
	    counter +=x;
	}
    return(counter);
}


function addSum() {
	var counter=0;
	for(var i=0; i<=100; i++) {
		counter += i;
	}
	return Math.pow(counter,2);
}
squareSum();

var balls = addSum() - squareSum() ;
console.log(balls);