function solution(s) {
  let arr = s
    .toLowerCase()
    .split('')
    .filter((el) => el === 'p' || el === 'y')
    .sort();
  if (arr.length % 2 === 0 && arr[arr.length / 2 - 1] !== arr[arr.length / 2]) {
    return true;
  }
  return false;
}

let output = solution('pPoooyY');
console.log(output); // --> true

output = solution('Pyy');
console.log(output); // --> false
