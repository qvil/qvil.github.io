---
title: "[한국어,EN] 자바스크립트 부동소수점 계산 이상한경우(Javascript floating point calculation)"
date: 2018-04-19 22:58:47 +0900
categories: "javascript"
tags: [js, float, toFixed]

comments: true
share: true
slug: floating-point-calculation
---

<!-- TOC -->

- [1. 현상(Issue)](#1-현상issue)
- [2. 해결(Resolve)](#2-해결resolve)
- [3. 반전(Reversal)](#3-반전reversal)
  - [3.1. 반전 해결(Resolve the reversal)](#31-반전-해결resolve-the-reversal)
- [4. 참고(Reference)](#4-참고reference)

<!-- /TOC -->

# 1. 현상(Issue)

```js
123.456 - 123.4;
```

**예상(Expect)**

```
0.056
```

**로그(Log)**

```
0.055999999999997385
```

??????

# 2. 해결(Resolve)

```js
(123.456 - 123.4).toFixed(3);
```

```
"0.056"
```

# 3. 반전(Reversal)

좋아 됐어! 그런데? 로그가 이상하다?(Yes! But?)

```js
typeof (123.456 - 123.4).toFixed(3);
```

```
"string"
```

!?!?!?

> ~~다음에 계속...(To be continue...)~~

## 3.1. 반전 해결(Resolve the reversal)

[MDN - toFixed](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

> 리턴 값(Return value)  
> Number 객체를 명시하는 문자열.(A String that specifies the Number object)

```js
Number((123.456 - 123.4).toFixed(3));
typeof Number((123.456 - 123.4).toFixed(3));
```

```
0.056
"number"
```

# 4. 참고(Reference)

- https://msdn.microsoft.com/ko-kr/library/sstyff0z(v=vs.94).aspx
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
