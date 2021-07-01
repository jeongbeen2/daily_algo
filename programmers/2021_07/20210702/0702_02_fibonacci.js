// Recursive Solution

// function solution(n) {
//   const fibo = (n, cache = []) => {
//     if (cache[n]) return cache[n];
//     else {
//       if (n === 0) return 0;
//       else if (n < 2) return 1;
//       cache[n] = fibo(n - 1, cache) + fibo(n - 2, cache);
//     }
//     return cache[n] % 1234567;
//   };
//   return fibo(n);
// }

// for loop solution

function solution(n) {
  let ans = [0, 1];
  if (n <= 1) return ans[n];
  for (let i = 2; i < n + 1; i++) {
    ans.push((ans[i - 2] + ans[i - 1]) % 1234567);
  }
  return ans[n];
}

let output = solution(5);
console.log(output); // --> 2

output = solution(100000);
console.log(output); // --> 5
