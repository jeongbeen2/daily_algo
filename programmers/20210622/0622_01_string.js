function solution(s) {
  if (!(s.length === 4 || s.length === 6)) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') return false;
    else if (isNaN(Number(s[i]))) return false;
  }
  return true;
}

let output = solution('424242');
console.log(output);
