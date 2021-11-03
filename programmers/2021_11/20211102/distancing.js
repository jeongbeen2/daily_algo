function solution(places) {
  let result = [];

  for (let i = 0; i < places.length; i++) {
    for (let j = 0; j < 5; j++) {
      // * for문을 통과 못할경우 0 푸시.
      result.push(0);
      break;
    }
    // * for문을 통과했다면 모두 잘 지키고 있으므로 1 푸시.
    result.push(1);
  }
}

let output = solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);

console.log(output); // --> 	[1, 0, 1, 1, 1]
