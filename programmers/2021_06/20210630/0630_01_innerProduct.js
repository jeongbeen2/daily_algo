function solution(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] * b[i]);
  }
  return result.reduce((acc, cur) => acc + cur);
}

let output = solution([1, 2, 3, 4], [-3, -1, 0, 2]);
