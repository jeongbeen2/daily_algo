function solution(k, tangerine) {
  // 해시테이블로 문제 해결 가능
  let hash = {
    1: 1,
    2: 2,
    3: 2,
    4: 1,
    5: 2,
  };

  // hash의 value중, 가장 큰수부터 채워나감.
  // 더했을때 k보다 같거나 커질경우 종료

  var answer = 0;
  return answer;
}

let result = solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
console.log(result); // 3

result = solution(4, [1, 3, 2, 5, 4, 5, 2, 3]);
console.log(result); // 2

result = solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
console.log(result); // 1
