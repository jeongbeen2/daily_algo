function solution(change, coins) {
  let ways = Array(change + 1).fill(99999);
  ways[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < ways.length; j++) {
      if (coins[i] <= j) {
        ways[j] = Math.min(ways[j - coins[i]] + 1, ways[j]);
      }
    }
  }
  return ways[ways.length - 1];
}

let output = solution(4850, [1, 5, 10, 50, 100, 500]);
console.log(output);
