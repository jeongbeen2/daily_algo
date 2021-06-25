function solution(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

let output = solution(2, 5);
console.log(output); // --> [2,4,6,8,10]

output = solution(4, 3);
console.log(output); // --> [4,8,12]

output = solution(-4, 2);
console.log(output); // --> [-4,-8]
