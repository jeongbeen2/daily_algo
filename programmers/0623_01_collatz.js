function solution(num) {
  const aux = (num, count) => {
    if (num >= 500) return -1;
    if (num === 1) return count;
    if (num % 2 === 0) {
      return aux((num /= 2), count + 1);
    } else {
      return aux((num = num * 3 + 1), count + 1);
    }
  };
  return aux(num, 0);
}

let output = solution(6);
console.log(output); // --> 8

output = solution(16);
console.log(output); // --> 4

output = solution(626331);
console.log(output); // --> -1

function solution(num) {
  const aux = (num, count) => {
    if (num >= 500) return -1;
    if (num === 1) return count;
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    return aux(num, count + 1);
  };
  return aux(num, 0);
}
