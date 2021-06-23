function solution(n) {
  let count = 1;
  const isPrime = (num) => {
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  for (let i = 3; i <= n; i++) {
    if (isPrime(i)) {
      console.log('i', i);
      count++;
    }
  }
  return count;
}

let output = solution(10);
console.log(output);

output = solution(5);
console.log(output);
