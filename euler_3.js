
var a = 600851475143;
var dingo = [];
var bingo = [];
for (var i =0; i<10000; i++) {
    
    if (Number.isInteger(a/i)=== true && i!= 1) {
        dingo.push(i);
    }
}
console.log(dingo);