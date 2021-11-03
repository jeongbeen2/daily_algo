function solution(A, B) {
  // * A, B의 길이는 같음
  // * 가장 작은 숫자는 어떻게나오지?
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }
  return result;
}

let output = solution([1, 4, 2], [5, 4, 4]);
console.log(output); // --> 	29

output = solution([1, 2], [3, 4]);
console.log(output); // --> 	10
