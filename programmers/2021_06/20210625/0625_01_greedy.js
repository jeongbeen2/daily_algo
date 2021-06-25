function solution(n, lost, reserve) {
  let result = n - lost.length;

  // * reserve와 lost에 둘다 들어가있으면 result++ & reserve.splice
  let same = reserve.filter((el) => lost.includes(el));
  for (let el of same) {
    lost.splice(lost.indexOf(el), 1);
    reserve.splice(reserve.indexOf(el), 1);
    result++;
  }

  // * el-1, el, el+1 이 reserve에 있으면 result++;
  for (let el of lost) {
    for (let i = -1; i <= 1; i++) {
      if (reserve.includes(el + i)) {
        result++;
        reserve.splice(reserve.indexOf(el + i), 1);
        break;
      }
    }
  }
  return result;
}

let output = solution(5, [2, 4], [1, 3, 5]);
console.log(output); // --> 5

output = solution(5, [2, 4], [3]);
console.log(output); // --> 4

output = solution(5, [2, 3, 4], [3, 4, 5]);
console.log(output); // --> 2
