function solution(n) {
  let transThree = n.toString(3).split('').reverse().join('');
  return Number.parseInt(transThree, 3);
}
let output = solution(45);
console.log(output); // -> 7

output = solution(125);
console.log(output); // -> 229
