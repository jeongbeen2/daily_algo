function solution(n) {
  // * 1부터 n까지 나눈 나머지가 1이 되는 값을 찾기
  // * 가장 작은 값 리턴
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
}

let output = solution(10);
console.log(output); // --> 3

output = solution(12);
console.log(output); // --> 11
