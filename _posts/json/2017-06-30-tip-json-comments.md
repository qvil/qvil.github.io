---
layout: post
title: "[JSON] 팁 - 주석"
modified: 2017-06-30
categories: "json"
tags: [json, tip, comments, json5]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

json에서 javascript 주석 문법을 사용하면 에러가 출력된다.

## 에러예제
```json
{
    // "key1": "value1", // Error
    /* "key2": "value2", */ // Error
    "key3": "value3",
}
```

## 대책
### JSON에서는 주석을 사용하지 마라.
![json-douglas-comments](/images/json-douglas-comments.png)

>### 그러나 사용하고 싶다면 JSON5를 사용하자.
>>[JSON5](http://json5.org)

## 참고
- [노피디님 블로그 - Cloud Computing On Demand : JSON 포맷의 데이터에 주석(코멘트)를 넣을 수 있을까?](http://www.hoons.net/Blog/View/148602)
- [Douglas Crockford - Google+](https://plus.google.com/+DouglasCrockfordEsq/posts/RK8qyGVaGSr)