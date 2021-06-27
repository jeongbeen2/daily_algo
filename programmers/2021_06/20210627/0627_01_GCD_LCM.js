function solution(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  const GCD = (minNum, maxNum) => {
    return minNum % maxNum === 0 ? maxNum : GCD(maxNum, minNum % maxNum);
  };
  const LCM = (minNum, maxNum) => {
    return (minNum * maxNum) / GCD(minNum, maxNum);
  };
  return [GCD(min, max), LCM(min, max)];
}

let output = solution(3, 12);
console.log(output); // --> [3,12]

output = solution(2, 5);
console.log(output); // --> [1,10]
