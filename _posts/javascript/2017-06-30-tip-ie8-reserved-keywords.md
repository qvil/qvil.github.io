---
layout: post
title: "[Javascript] Tip - 예약어 사용 문제(Feat. IE8)"
modified: 2017-06-30
categories: "javascript"
tags: [javascript, tip, ie8, reserved keywords, issue]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 이슈, 원인
IE8에서 Error가 출력되면서 페이지가 정상적으로 로드되지 않는 이슈가 발생했다. 
<span style="color: red;font-weight: bold">원인은 자바스크립트 예약어 사용</span>
>경우에 따라서 모던 웹 브라우저에서는 에러가 발생하지 않는다.

## 예제
```js
var someFunction = {
    save: function() { // Error : save는 예약어
        console.log('save');
    },
    switch: function() { // Error : switch는 예약어
        console.log('switch');
    },
};
```

## 결론
예약어의 사용을 피해야 한다. 예약어는 너무 많으니까 [아래 링크 참고](#참고)

## 참고
- [MSDN - JScript Reserved Words (Visual Studio - JScript)](https://msdn.microsoft.com/en-us/library/ttyab5c8.aspx)
- [MDN - Reserved keywords as of ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
