function solution(left, right) {
  let result = 0;
  const denoSum = (num, count = 2) => {
    if (num === 1) count = 1;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) count++;
    }
    return count;
  };

  for (let i = left; i <= right; i++) {
    if (denoSum(i) % 2 === 0) result += i;
    else result -= i;
  }
  return result;
}

let output = solution(1, 2);
console.log(output); // --> 43

output = solution(24, 27);
console.log(output); // --> 52
