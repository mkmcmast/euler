/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

/*
The larger 3 digit number are 999 and 999
So i need to make a function probably that will multiply 999 by all numbers from 999 to 100, 
then I also need to multiply 998 by all of the numbers from 999 to 100;
then i need to multiply 997 by all of the numbers from 999 to 100;

and I also need to check to see whether the product is a palindrome,
to check for a pallindrome i need to convert the integers to strings and check the index of the first number agains the last, then 
the second to last to the second, then the third to the third from last and if they are all equal then put that number in an array 
or variable.

actually I only need to do this until the first number is found since that number will be the hightest pallindrome.

*/

function multiply(num1, num2) {
    return num1*num2;
}
function reverse(s){
    return s.split("").reverse().join("");
}
var balls=[];
for (var b=999; b>100; b--) {

for (var i=999; i>=100; i--) {
    var product=multiply(b,i);
    var dingo =product.toString();
    var dog = reverse(dingo);
        if (dingo === dog) {
            
            balls.push(dingo);
        } 
    }
}
console.log(Math.max(...balls));

// or as a function

function multiply(num1, num2) {
    return num1*num2;
}
function reverse(s){
    return s.split("").reverse().join("");
}

function palin() {
    var balls=[];
for (var b=999; b>100; b--) {

for (var i=999; i>=100; i--) {
    var product=multiply(b,i);
    var dingo =product.toString();
    var dog = reverse(dingo);;
        if (dingo === dog) {
            
            balls.push(dingo);
        } 
    }
}
return Math.max(...balls);
}

palin();