function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  const kind = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;
  for (let num of kind) {
    answer++;
    sum += num;
    if (sum >= k) break;
  }

  return answer;
}

let result = solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
console.log(result); // 3

result = solution(4, [1, 3, 2, 5, 4, 5, 2, 3]);
console.log(result); // 2

result = solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
console.log(result); // 1
