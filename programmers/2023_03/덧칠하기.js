function solution(n, m, section) {
  let index = 0;
  let result = 0;
  for (let i = 0; i < section.length; i++) {
    if (index >= n) break;
    if (index < section[i]) {
      index = section[i] + m - 1;
      result++;
    }
  }

  return result;
}

let result = solution(8, 4, [2, 3, 6]);
console.log(result); // 2

result = solution(5, 4, [1, 3]);
console.log(result); // 1

result = solution(4, 1, [1, 2, 3, 4]);
console.log(result); // 4
