function solution(arr) {
  let newArr = [...arr];
  let min = newArr.sort((a, b) => a - b).shift();
  arr.splice(arr.indexOf(min), 1);
  return arr.length === 0 ? -1 : arr;
}

let output = solution([4, 3, 2, 1]);
console.log(output); // --> [4,3,2]

output = solution([10]);
console.log(output); // --> -1
