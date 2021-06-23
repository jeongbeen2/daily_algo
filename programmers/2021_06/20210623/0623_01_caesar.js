function solution(s, n) {
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') result += ' ';
    else if (lower.includes(s[i])) {
      result += lower[(lower.indexOf(s[i]) + n) % 26];
    } else {
      result += upper[(upper.indexOf(s[i]) + n) % 26];
    }
  }
  return result;
}

let output = solution('AB', 1);
console.log(output); // --> 'BC'

output = solution('z', 1);
console.log(output); // --> 'a'

output = solution('a B z', 4);
console.log(output); // --> 'e F d'
