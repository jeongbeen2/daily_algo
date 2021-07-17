function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

let output = solution('one4seveneight');
console.log(output); // --> 1478

output = solution('23four5six7');
console.log(output); // --> 234567

output = solution('2three45sixseven');
console.log(output); // --> 234567

output = solution('123');
console.log(output); // --> 123
