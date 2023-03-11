function solution(priorities, location) {
  const documents = Array.from({ length: priorities.length }, (_, i) => i);
  let cnt = 0;
  while (priorities.length) {
    const priority = priorities.shift();
    const document = documents.shift();
    const max = Math.max(...priorities);
    if (max > priority) {
      priorities.push(priority);
      documents.push(document);
    } else {
      cnt++;
      if (document === location) return cnt;
    }
  }
}

let result = solution([2, 1, 3, 2], 2);
console.log(result); // 1

result = solution([1, 1, 9, 1, 1, 1], 0);
console.log(result); // 5

result = solution([1, 3, 9, 1, 1, 1], 0);
console.log(result); // 6
