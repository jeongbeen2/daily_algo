function solution(d, budget) {
  let part = d.sort((a, b) => a - b);
  let temp = 0;
  for (let i = 0; i < part.length; i++) {
    temp += part[i];
    if (temp > budget) return i;
    else if (temp === budget) return i + 1;
  }
  return part.length;
}

let output = solution([1, 1, 1, 1, 1], 9);
console.log(output); // --> 3

output = solution([11, 12, 13, 14], 10);
console.log(output); // --> 4
