function solution(board, moves) {
  // stack이용
  // 뽑으면 board에서 splice, stack에 추가
  // 만약 stack에 추가된 값이랑 바로 앞의 값이랑 같을경우 count += 2, push해주지 않고 pop

  let stack = [];
  let count = 0;
  for (let move = 0; move < moves.length; move++) {
    for (let j = 0; j < board.length; j++) {
      let pick = board[j][moves[move] - 1];
      if (pick !== 0) {
        if (stack[stack.length - 1] === pick) {
          stack.pop();
          count += 2;
        } else {
          stack.push(pick);
        }
        board[j][moves[move] - 1] = 0;
        break;
      }
    }
  }
  return count;
}

let output = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

console.log(output);
