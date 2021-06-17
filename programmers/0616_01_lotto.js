function solution(lottos, win_nums) {
  // 1. win_nums의 숫자와 lottos의 숫자를 비교해서 같은값일때마다 sameNum++;
  // let sameNum = 0;
  // 최소등수는 sameNum, 최대등수는 sameNum+0의 갯수
  let sameNum = 0;
  let zeroNum = 0;
  for (let lotto of lottos) {
    if (win_nums.includes(lotto)) {
      sameNum++;
    }
    if (lotto === 0) {
      zeroNum++;
    }
  }
  let maxNum = sameNum + zeroNum;
  console.log(sameNum, zeroNum);
  var answer = [];
  return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
