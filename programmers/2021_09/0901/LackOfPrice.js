function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i <= count; i++) {
    let temp = price * i;
    total += temp;
  }

  return total <= money ? 0 : total - money;
}

let output = solution(3, 20, 4);
console.log(output); // 10
