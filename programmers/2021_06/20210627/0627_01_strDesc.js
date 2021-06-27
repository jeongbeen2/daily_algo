function solution(s) {
  return s.split('').sort().reverse().join('');
}

// unicode (charCodeAt) 를 이용해서 구분하기

/* function solution(s) {
  let lower = [];
  let upper = [];
  for (let i = 0; i < s.length; i++) {
    console.log(s[i].charCodeAt());
    if (s[i].charCodeAt() <= 90) upper.push(s[i]);
    else lower.push(s[i]);
  }
  return lower.sort().reverse().join('') + upper.sort().reverse().join('');
}
 */

let output = solution('ZAsavSDavASDXZ');
console.log(output); // --> gfedcbZ"
