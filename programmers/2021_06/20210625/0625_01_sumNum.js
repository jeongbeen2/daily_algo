function solution(n) {
  if (n < 10) return n;
  let arr = n.toString().split('');
  let answer = arr.reduce((acc, cur) => Number(acc) + Number(cur));

  return answer;
}

let output = solution(0);
console.log(output);
