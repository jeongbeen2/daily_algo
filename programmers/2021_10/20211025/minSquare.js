function solution(sizes) {
  // * 배열을 돌면서 큰 값을 왼쪽으로 밀면 됨
  let temp;
  let max0 = 0;
  let max1 = 0;
  for (let size of sizes) {
    if (size[0] < size[1]) {
      temp = size[0];
      size[0] = size[1];
      size[1] = temp;
    }
    if (size[0] > max0) max0 = size[0];
    if (size[1] > max1) max1 = size[1];
  }

  return max0 * max1;
}

let output = solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
console.log(output); // --> 4000

output = solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);
console.log(output); // --> 120

output = solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
console.log(output); // --> 133
