function solution(n, m, section) {
  let index = 0;
  let result = 0;
  section.map((el) => {
    if (index < el) {
      index = el + m - 1;
      result++;
    }
  });

  return result;
}

let result = solution(8, 4, [2, 3, 6]);
console.log(result); // 2

result = solution(5, 4, [1, 3]);
console.log(result); // 1

result = solution(4, 1, [1, 2, 3, 4]);
console.log(result); // 4
