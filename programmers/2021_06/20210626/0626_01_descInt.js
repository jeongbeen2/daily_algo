function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

let output = solution(118372);
console.log(output); // -->  873211
