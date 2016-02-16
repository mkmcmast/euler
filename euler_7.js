
function isPrime(numb){
  for(var i=2; i<= Math.sqrt(numb); i++){
 if(numb%i ===0){
   return false;
 }
  }
  return true;
}

var primes=[];
for(var i=2;i<1000000;i++) {
    if(isPrime(i) ===true) {
		primes.push(i);
	}
}

primes.length;
primes[10000];