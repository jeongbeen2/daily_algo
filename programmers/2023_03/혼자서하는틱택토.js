function solution(board) {
  let correctArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  let obj = {};

  board.map((el, i) => {
    el.split("").map((e, j) => {
      let key = j + i * 3;
      obj[key + 1] = e;
    });
  });

  let isOver = 0;
  Object.values(obj).map((el) => {
    if (el === "O") isOver++;
    else if (el === "X") isOver--;
  });
  if (![0, 1].includes(isOver)) return 0;

  let isDone = false;
  correctArr.forEach((arr, i) => {
    let temp = arr.every((val, i, arr) => {
      if (obj[val] === ".") return;
      return obj[val] === obj[arr[0]];
    });
    if (temp) isDone = true;
  });
  return isDone ? 0 : 1;
}

let result = solution(["O.X", ".O.", "..X"]);
console.log(result); // 1

result = solution(["OOO", "...", "XXX"]);
console.log(result); // 0

result = solution(["...", ".X.", "..."]);
console.log(result); // 0

result = solution(["...", "...", "..."]);
console.log(result); // 1
