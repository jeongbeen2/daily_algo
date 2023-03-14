function solution(brown, yellow) {
  let multiple = brown + yellow;
  let plus = (brown + 4) / 2;
  let x = (Math.sqrt(plus * plus - 4 * multiple) + plus) / 2;
  return [x, plus - x];
}

let result = solution(10, 2);
console.log(result); // [4,3]

result = solution(8, 1);
console.log(result); // [3,3]

result = solution(24, 24);
console.log(result); // [8,6]
