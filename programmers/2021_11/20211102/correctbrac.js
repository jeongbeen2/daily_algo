function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else {
      count--;
      if (count < 0) return false;
    }
  }
  if (count > 0) return false;
  return true;
}

function solution_queue(s) {
  const queue = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      queue.push(s[i]);
    } else {
      if (queue[0] === undefined) return false;
      queue.shift();
    }
  }
  if (queue.length !== 0) return false;
  return true;
}

let output = solution("()()");
console.log(output); // --> true

output = solution("(())()");
console.log(output); // --> true

output = solution(")()(");
console.log(output); // --> false

output = solution("(()(");
console.log(output); // --> false
