function solution(s) {
  let arr = s.split(' ').sort((a, b) => a - b);
  return `${arr[0]} ${arr[arr.length - 1]}`;
}

let output = solution('1 2 3 4');
console.log(output); // --> "1 4"

output = solution('-1 -2 -3 -4');
console.log(output); // --> "-4 -1"

output = solution('-1 -1');
console.log(output); // --> "-1 -1"
