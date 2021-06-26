function solution(strings, n) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i][n]);
  }
}

let output = solution(['sun', 'bed', 'car'], 1);
console.log(output); // --> ["car", "bed", "sun"]

output = solution(['abce', 'abcd', 'cdx'], 2);
console.log(output); // --> ["abcd", "abce", "cdx"]
