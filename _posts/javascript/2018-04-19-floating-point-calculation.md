---
layout: post
title: "[한국어,EN] 부동소수점 계산 이상한경우(Javascript floating point calculation)"
date: 2018-04-19 22:58:47 +0900
categories: "javascript"
tags: [js,float]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

# 현상(Issue)

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

# 해결(Resolve)

```js
(123.456 - 123.4).toFixed(3);
```

**로그(Log)**

```
"0.056"
```

# 반전(Reversal)

좋아 됐어! 그런데? 로그가 이상하다?(Yes! But?)

```js
typeof (123.456 - 123.4).toFixed(3);
```

**로그(Log)**

```
"string"
```

!?!?!?

> 다음에 계속...(To be continue...)

# 참고(Reference)

* https://msdn.microsoft.com/ko-kr/library/sstyff0z(v=vs.94).aspx
