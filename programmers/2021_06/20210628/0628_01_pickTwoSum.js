function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }
  return result.sort((a, b) => a - b);
}

let output = solution([2, 1, 3, 4, 1]);
console.log(output); // --> [2,3,4,5,6,7]

output = solution([5, 0, 2, 7]);
console.log(output); // --> [2,5,7,9,12]
