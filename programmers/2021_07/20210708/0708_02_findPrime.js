function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const arr = numbers.split('');
  const result = new Set();

  const getNumber = (numArr, curNum) => {
    if (numArr.length) {
      for (let i = 0; i < numArr.length; i++) {
        const tempArr = [...numArr];
        const tempNum = curNum + numArr[i];
        // numArr을 하나씩 빼주기
        tempArr.splice(i, 1);
        if (isPrime(parseInt(tempNum))) {
          result.add(parseInt(tempNum));
        }
        getNumber(tempArr, tempNum);
      }
    }
  };
  getNumber(arr, '');
  return result.size;
}

let output = solution('17');
console.log(output); // --> 3

// output = solution('011');
// console.log(output); // --> 2
