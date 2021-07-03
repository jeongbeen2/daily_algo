function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) absolutes[i] = -absolutes[i];
  }
  return absolutes.reduce((a, b) => a + b);
}

let output = solution([4, 7, 12], [true, false, true]);
console.log(output);

output = solution([1, 2, 3], [false, false, true]);
console.log(output);
