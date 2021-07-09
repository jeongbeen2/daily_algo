function solution(grid) {
  //  완전탐색을 하던 중 1과 만나면 count++를 하고
  // 이어진 1들을 다 0으로 만들어버림.
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '0') continue;
      count++;
      findLand(row, col);
    }
  }
  function findLand(row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length)
      return;
    if (grid[row][col] === '0') return;

    grid[row][col] = '0';
    findLand(row - 1, col);
    findLand(row + 1, col);
    findLand(row, col - 1);
    findLand(row, col + 1);
  }
  return count;
}

let grid = [
  ['0', '1', '1', '1'],
  ['0', '1', '1', '1'],
  ['1', '1', '0', '0'],
];

let output = countIslands(grid);
console.log(output); // --> 1

grid = [
  ['0', '1', '1', '1', '0'],
  ['0', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
];

output = countIslands(grid);
console.log(output); // --> 3
