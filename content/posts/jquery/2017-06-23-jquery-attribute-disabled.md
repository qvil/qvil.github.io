---
title: "[jQuery] attr(), prop()의 차이와 disabled 속성 제어"
date: 2017-06-23
categories: "jquery"
tags: [jquery, disabled, attr, prop]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink:
comments: true
share: true
---

## jQuery disabled 속성 제어

> 정말 많이 쓰는데 'disable'인지 'disabled'인지 자주 헷갈린다.

```js
$(elem).attr("disabled", true);
$(elem).attr("disabled", false);
```

**Tip.**

아래와 같이 삼항연산자를 이용해서 `true`, `false`를 제어하면 보기도 좋고 코드도 줄어들고 편리하다.

```js
$(elem).attr("disabled", condition ? true : false);
```

## attr(), prop()의 차이

### 요약

> `HTML`에 관련된 것은 `.attr()` `Javascript`에 관련된 것은 `.prop()`

### 본문

- jQuery 1.6/1.6.1에서 `.attr()`와 `.prop()`로 나눔.
- [checkbox 버그](https://stackoverflow.com/questions/7046081/jquery-uncheck-checkbox-problem)가 존재했음.
  - `.prop("checked", true)`로 해결.
- [공식 API 문서][jquery-prop]
  > The difference between attributes and properties can be important in specific situations. Before jQuery 1.6, the .attr() method sometimes took property values into account when retrieving some attributes, which could cause inconsistent behavior. As of jQuery 1.6, the .prop() method provides a way to explicitly retrieve property values, while .attr() retrieves attributes.
  >
  > > `.attr()`에서 문제가 있어서 `.prop()`만들었음. 궁금하면 문서 더 보세요.

## 참고

- [jQuery Official API Documentation - prop][jquery-prop]
- [StackOverFlow - .prop() vs .attr()](https://stackoverflow.com/questions/5874652/prop-vs-attr)
- [.attr() .prop() 왜 나누어졌는가](http://javascriptandjquerydev.blogspot.kr/2012/07/attr-prop.html)
- [OKKY - JQuery .attr() 와 .prop() 의 차이에 대한 소소한 팁](https://okky.kr/article/230491)

[jquery-prop]: http://api.jquery.com/prop/
