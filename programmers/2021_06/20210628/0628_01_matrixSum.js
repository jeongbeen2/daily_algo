function solution(arr1, arr2) {
  var answer = [[]];
  return answer;
}

let output = solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
console.log(output);
/*
    [
        [4, 6],
        [7, 9],
    ];
*/

output = solution(
  [
    //
    [1],
    [2],
  ],
  [
    //
    [3],
    [4],
  ]
);
console.log(output); // --> [[4],[6]]
