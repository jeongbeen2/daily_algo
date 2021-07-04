function solution(numbers) {
  // 4자리 숫자를 만들어 준 다음, 정렬 해주고 다시 원상태의 넘버로 바꿔줘야함.
  let result = [];
  const changeFunc = (num) => {
    let temp = '';
    num = num.toString();
    for (let i = 0; i < 4; i++) {
      temp += num;
    }
    return temp;
  };
  for (number of numbers) {
    result.push(changeFunc(number));
  }
  result.sort().reverse();
  result = result.map((el) => {
    if (el.length === 8) return el.slice(0, 2);
    else if (el.length === 12) return el.slice(0, 3);
    else if (el.length === 16) return el.slice(0, 4);
    else return el.slice(0, 1);
  });
  if (!parseInt(result.join(''))) return '0';
  return result.join('');
}
let output = solution([0, 0, 0, 0, 0]);
console.log(output); // --> '6210'

output = solution([3, 30, 34, 5, 9]);
console.log(output); // --> '9534330'

output = solution([3, 30, 34, 5, 5, 9, 54, 50]);
console.log(output);

output = solution([121, 12]);
console.log(output);
