---
title: "[Javascript] 소수점 자리수 지정(자르기) toFixed() - (Feat. 부동소수점 연산)"
date: 2017-07-11
categories: "javascript"
tags: [javascript, decimal-point, floating-point]

comments: true
share: true
---

[lte-earfcn-calculator](https://www.npmjs.com/package/lte-earfcn-calculator)를 만들다가 아래 이슈가 발생했다.

## 이슈

```js
LTE.earfcnToFreq(3802);
// 1845.1000000000001
```

## 원인

> 요약 : 부동소수점 연산으로 인해서 소수점 연산 시 오차가 생길 수 있음. `toFixed()`함수를 사용해서 해결.

아래 예제를 실행해보면 `0.3`이 기대되지만 다른 값이 출력된다.

### 예제

```js
0.1 + 0.2;
// 0.30000000000000004
```

> 자바스크립트는 부동소수점 방식(floating point)으로 계산을 하며 IEEE Standard 754규격을 따릅니다.
> 그리고 실수의 변환을 위해 53bit의 연산을 합니다.
> 정수인 경우에는 해당 기억공간의 범위안에서 정확한 결과를 나타내는데,,
> 실수인 경우에는 기억공간의 범위를 벗어나는 결과가 나타나면 나머지수를 버립니다. 출처 : [네이버-지식인]

## 해결

```js
LTE.earfcnToFreq(3802).toFixed(1);
// 1845.1
```

## 참고

- [MDN - Number.prototype.toFixed()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [네이버 지식인 - javascript 0.6 + 0.3 = 0.8999999?][네이버-지식인]

[네이버-지식인]: http://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=111685795&qb=amF2YXNjcmlwdCDrsoTqt7gg7IaM7IiY&enc=utf8&section=kin&rank=1&search_sort=0&spq=0&pid=gdL46v331xwsscdSbCwssv--283939&sid=TQH0DQ7tAU0AAB5gKlo출처:%20http://nackbin.tistory.com/23%20[느릿느릿]
