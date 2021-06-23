function isPrime(num) {
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  const comb = function (arr, num = 3) {
    let result = [];
    if (num === 1) return arr.map((e) => [e]);
    arr.forEach((el, idx, array) => {
      let rest = array.slice(idx + 1);
      let temp = comb(rest, num - 1);
      for (let ele of temp) {
        result.push([el].concat(ele));
      }
    });
    return result;
  };

  let sum = comb(nums).map((el) => el.reduce((acc, cur) => acc + cur));
  let answer = sum.filter((el) => isPrime(el)).length;

  return answer;
}

let output = solution([1, 2, 4, 6, 7]);
console.log(output); // -> 4
