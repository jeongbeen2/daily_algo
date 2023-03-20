function solution(cap, n, deliveries, pickups) {
    let result = 0;

    while (deliveries.length || pickups.length) {
        let w = cap;
        let distance1 = 0;
        let distance2 = 0;
        for (let i = deliveries.length - 1; i >= 0; i--) {
            if (deliveries[i] !== 0) {
                // 왕복 거리 더하기
                if (w === cap) distance1 = i + 1;
                if (deliveries[i] <= w) {
                    w -= deliveries[i];
                    deliveries.pop();
                } else {
                    deliveries[i] -= w;
                    break;
                }
            } else deliveries.pop();
        }

        w = cap;

        // 픽업 계산
        for (let i = pickups.length - 1; i >= 0; i--) {
            if (pickups[i] !== 0) {
                // 왕복 거리 더하기
                if (w === cap) distance2 = i + 1;
                if (pickups[i] <= w) {
                    w -= pickups[i];
                    pickups.pop();
                } else {
                    pickups[i] -= w;
                    break;
                }
            } else pickups.pop();
        }

        result += Math.max(distance1, distance2) * 2;
    }
    return result;
}


let result = solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])
console.log(result) // 16

result = solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])
console.log(result) // 30