function solution(citations) {
  citations = citations.sort((a, b) => a - b);
  for (let h = citations.length; h >= 0; h--) {
    const citationCnt = citations.filter((citation) => citation >= h).length;
    if (citationCnt >= h) return h;
  }
}

let output = solution([3, 0, 6, 1, 5]);
console.log(output); // --> 3
