function getLCM(m, n) {
  let max = Math.max(m, n);
  let min = Math.min(m, n);

  const GCD = (max, min) => {
    return max % min === 0 ? min : GCD(min, max % min);
  };

  return (max * min) / GCD(min, max);
}

function solution(arr) {
  let result = arr.reduce((acc, cur) => getLCM(acc, cur));
  return result;
}

let output = solution([2, 6, 8, 14]);
console.log(output); // --> 168

output = solution([1, 2, 3]);
console.log(output); // --> 6
