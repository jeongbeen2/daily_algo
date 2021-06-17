function solution(nums) {
  let result = new Set(nums);
  let max = nums.length / 2;
  return max > [...result].length ? [...result].length : max;
}

let output = solution([3, 1, 2, 3]);
console.log(output); // -> 2

output = solution([3, 3, 3, 2, 2, 4]);
console.log(output); // -> 3

output = solution([3, 3, 3, 2, 2, 2]);
console.log(output); // -> 2
