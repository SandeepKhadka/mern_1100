// Prime Number

// 6 => 2,3,4,5,

let isPrime = (n) => {   // n  = 3
  if (n <= 1) return false;  
  for (let i = 2; i < n; i++) { // 2 < 3
    if (n % i == 0) return false; // n = 3; 3 % 2
  }
  return true
};

let findRange= ()=>{
    let primeArray = []
    for(let i = 2; i <= 100; i ++){
        if(isPrime(i)){
            primeArray.push(i)
        }
    }
    return primeArray
}

console.log(findRange());

