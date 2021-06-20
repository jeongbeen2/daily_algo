function solution(a, b) {
    var answer = 0;
    let m = Math.max(a,b);
    let n = Math.min(a,b);
    for(let i = n; i<=m; i++){
        answer += i
    }
    return answer;
}