function solution(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  const GCD = (min, max) => {
    return min % max === 0 ? max : GCD(max, min % max);
  };
  const LCM = (min, max) => {
    return (min * max) / GCD(min, max);
  };
  return [GCD(min, max), LCM(min, max)];
}

let output = solution(3, 12);
console.log(output); // --> [3,12]

output = solution(2, 5);
console.log(output); // --> [1,10]
