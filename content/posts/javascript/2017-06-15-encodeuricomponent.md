---
title: "[Javascript]encodeURIComponent 함수"
date: 2017-06-15
tags: [javascript, issue, ajax]
comments: true
share: true
slug: javascript/encodeuricomponent
---

- Table of Contents
  {:toc}

# encodeURIComponent 함수

## 이슈

> 클라이언트에서 웹서버에 전송(ajax)하는 문자열에 특수문자(=,& ...)가 포함되어 정상적으로 전송되지 않는 현상.

## 해결방법

### 특수문자 정상전송 불가

```js
var str = "specialLetters=?"; // X
```

### 특수문자 정상전송

```js
var str = "specialLetters=?";
encodeURIComponent(str); // O
```

## 참고

[MSDN - encodeURIComponent 함수](<https://msdn.microsoft.com/ko-kr/library/aeh9cef7(v=vs.94).aspx>)

## 결론

> 작년에 비슷한 이슈가 있어서 같은 방법으로 해결했는데,
> **이런 방식으로 해결했다는 것 자체가 생각이 안나서 시간낭비를 했다.**
>
> > 꼭 기록하자.
