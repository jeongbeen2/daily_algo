function solution(s) {
  let centerNum = parseInt(s.length / 2);
  return s.length % 2 === 0 ? s[centerNum - 1] + s[centerNum] : s[centerNum];
}

let output = solution('abcde');
console.log(output);

output = solution('qwer');
console.log(output);
