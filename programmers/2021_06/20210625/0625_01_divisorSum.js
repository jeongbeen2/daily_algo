function solution(n) {
  if (n === 0) return 0;
  let divisor = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisor.push(i);
  }
  return divisor.reduce((acc, cur) => acc + cur);
}

let output = solution(12);
console.log(output); // --> 28

output = solution(5);
console.log(output); // --> 6
