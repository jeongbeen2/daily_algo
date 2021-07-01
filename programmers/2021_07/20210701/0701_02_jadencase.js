function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((el) => {
      if (el !== '') {
        return el[0].toUpperCase() + el.slice(1);
      }
    })
    .join(' ');
}

let output = solution('  3people unfollowed Me');
console.log(output); // "3people Unfollowed Me"

output = solution('for the last week');
console.log(output); // --> "For The Last Week"
