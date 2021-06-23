function solution(x) {
  return (
    x %
      x
        .toString()
        .split('')
        .reduce((a, b) => Number(a) + Number(b)) ===
    0
  );
}

let output = solution(10);
console.log(output); // --> true

output = solution(13);
console.log(output); // --> false
