function solution(progresses, speeds) {
  const finished = [];
  let answer = [];
  for (let i = 0; i < progresses.length; i++) {
    let percent = progresses[i];
    let days = 0;
    while (percent < 100) {
      percent += speeds[i];
      days++;
    }
    finished.push(days);
  }
  while (finished.length > 0) {
    let firstFunc = finished[0];
    let count = 0;
    while (firstFunc >= finished[0]) {
      finished.shift();
      count++;
    }
    answer.push(count);
  }
  return answer;
}
