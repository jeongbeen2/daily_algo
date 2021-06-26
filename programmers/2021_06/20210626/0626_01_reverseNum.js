function solution(n) {
  let result = [];
  for (let i = 0; i < n.toString().length; i++) {
    result.unshift(Number(n.toString()[i]));
  }
  return result;
}

console.log(solution(12345));
