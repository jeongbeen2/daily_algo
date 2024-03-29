## 해시 테이블 (Hash Table)

> 해시테이블은 키(key)와 값(value)을 쌍으로 저장하는 자료구조

검색, 삽입, 삭제 연산 등의 작업에 O(1) 시간 복잡도를 가지는 빠른 성능을 보장한다.

해시테이블은 배열과 해시 함수(hash function)로 이루어져 있다.
배열은 고정된 크기를 가지며, 각각의 인덱스는 해시 함수를 이용하여 계산된 값에 매핑된다.
이 때, 해시 함수는 임의의 길이의 입력을 받아서 고정된 길이의 출력을 반환하는 함수로, 입력값에 따라 고정된 출력값이 나오기 때문에 같은 입력값에 대해서는 항상 같은 출력값이 반환된다.

해시테이블에 값을 저장할 때는, 키를 해시 함수에 적용하여 해시 값(hash value)을 계산한 후, 이 값을 배열의 인덱스로 사용하여 값을 저장합니다. 이 때, 해시 값이 같은 경우 충돌(collision)이 발생할 수 있다.

### 해시 충돌?

> 각기 다른 key를 해시함수에 넣었으나, 동일한 값을 낼 경우

충돌을 해결하기 위해, 일반적으로는 체이닝(chaining) 방식을 사용하게 된다.
체이닝은 같은 해시 값을 가진 항목을 연결 리스트로 연결하여 처리하는 방식이다.
그러면 충돌이 발생할 경우, 해당 인덱스에 연결 리스트를 생성하고, 새로운 값을 연결 리스트의 맨 끝에 추가한다. 검색 작업을 수행할 때는, 검색하려는 키의 해시 값을 계산한 후 해당 인덱스의 연결 리스트를 탐색하여 값을 찾는다.

### 사용처

- string을 기준으로 정보를 기록하고 관리할 때 사용한다.

### Reference

- [해시 Hash 알고리즘 설명 5분만에 이해하기](https://www.youtube.com/watch?v=zFL29ydL9D8)
- [해시 알고리즘개발자라면 꼭 알아야할 Hash Table 의 모든 것!](https://www.youtube.com/watch?v=HraOg7W3VAM)
<!-- - []() -->
