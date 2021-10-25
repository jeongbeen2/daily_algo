function solution(numbers) {
  let result = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) result += i;
  }
  return result;
}

let output = solution([1, 2, 3, 4, 6, 7, 8, 0]);
console.log(output); // --> 14

output = solution([5, 8, 4, 0, 6, 7, 9]);
console.log(output); // --> 6
