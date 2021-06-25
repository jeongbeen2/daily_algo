function solution(n) {
  let num = Math.sqrt(n);
  if (Number.isInteger(num)) {
    return (num + 1) ** 2;
  }
  return -1;
}

let output = solution(121);
console.log(output); // --> 144

output = solution(3);
console.log(output); // --> -1
