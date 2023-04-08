function solution(n, k, enemy) {
    // 가장 높은 숫자에서 무적권을 써야함.
    // 문제의 핵심은, 무적권을 어떻게 사용하냐에 달림.
    // 높은 숫자를 어떻게 판단해서 무적권을 사용 할 것인지.
    // 높은 숫자 중 중복되는 숫자도 잘 판단해야함. 무적권은 3개인데 적이 [10, 7, 5, 5 ...] 이렇게 되면, 5에서는 1번만 써야함.

    for (let i = 0; i < enemy.length; i++) {

    }
}


let result = solution(7, 3, [4, 2, 4, 5, 3, 3, 1])
console.log(result) // 5

result = solution(2, 4, [3, 3, 3, 3])
console.log(result) // 4