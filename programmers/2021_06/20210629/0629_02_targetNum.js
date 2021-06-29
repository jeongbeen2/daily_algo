function solution(numbers, target) {
  let count = 0;
  // ? 일단 모두 더한 다음, 요소마다 2배씩 곱해주고 빼주기
  // ? doubleNum arr을 만들어서 저장하고, 여기의 모든 부분집합을 구한 다음 다 더해서
  // ? 각 요소를 합과 빼주었을때 target이랑 같은 값 반환.
  let doubleNum = numbers.map((el) => el * 2);
  let allSum = numbers.reduce((acc, cur) => acc + cur);
  const comb = function (arr, num) {
    let result = [];
    if (num === 1) return arr.map((e) => [e]);
    arr.forEach((el, idx, array) => {
      let rest = array.slice(idx + 1);
      let temp = comb(rest, num - 1);
      for (let ele of temp) {
        result.push([el].concat(ele));
      }
    });
    return result.map((el) => el.reduce((a, b) => a + b));
  };

  for (let i = 0; i < numbers.length; i++) {
    comb(doubleNum, i).map((el) => {
      if (allSum - el === target) count++;
    });
  }
  return count;
}

let output = solution([1, 1, 1, 1, 1], 3);
console.log(output); // --> 5
