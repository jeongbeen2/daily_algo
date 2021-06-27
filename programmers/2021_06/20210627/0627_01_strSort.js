function solution(strings, n) {
  return strings
    .map((str) => (str = str[n] + str))
    .sort()
    .map((str) => str.slice(1));
}

let output = solution(['sun', 'bed', 'car'], 1);
console.log(output); // --> ["car", "bed", "sun"]

output = solution(['abce', 'abcd', 'cdx'], 2);
console.log(output); // --> ["abcd", "abce", "cdx"]
