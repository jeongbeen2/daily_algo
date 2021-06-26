function solution(arr, divisor) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) result.push(arr[i]);
  }
  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}

let output = solution([2, 36, 1, 3], 1);
console.log(output); // --> [5,10]
