/*If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of
these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/


var nums=[];
for (i=0; i<1000;i++) {
    if (i%3 === 0 || i%5 ===0) {
        nums.push(i);
    }
}
var ding=[];
 var total=0;
    for(b = 0; b < nums.length; b++){
     total += nums[b];
     
     console.log("answer "+ total);
    }
    
/*var result = 0;
for (var x=0; x<=nums.length; x++) {
            nums[x] + result;
            console.log(result);
        }
*/

/*make an array of all of the numbers under 1000 divisiblb by 3 or 5
then add each index of the array to each other*/
