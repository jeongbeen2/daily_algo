function solution(numbers, hand) {
  var answer = '';
  let left = [1, 4, 7];
  let preLeftIdx = 0;
  let mid = [2, 5, 8];
  let right = [3, 6, 9];
  let preRightIdx = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (left.includes(numbers[i])) {
      answer += 'L';
      preLeftIdx = left.indexOf(numbers[i]);
    } else if (right.includes(numbers[i])) {
      answer += 'R';
      preRightIdx = right.indexOf(numbers[i]);
    } else {
      let midIdx = mid.indexOf(numbers[i]);
      let leftClose = Math.abs(midIdx - preLeftIdx);
      let rightClose = Math.abs(midIdx - preRightIdx);
      console.log(numbers[i], 'leftClose', leftClose, 'rightClose', rightClose);
      if (leftClose === rightClose) {
        if (hand === 'right') {
          answer += 'R';
        } else {
          answer += 'L';
        }
      } else if (leftClose < rightClose) answer += 'L';
      else if (leftClose > rightClose) answer += 'R';
      if (numbers[i] === 0) {
        answer += '0';
      }
    }
  }
  return answer;
}

let output = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
console.log(output);

output = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
console.log(output);

output = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right');
console.log(output);
