---
title: "[CSS] CSS로 대문자 소문자 변환, 첫글자만 대문자 변환(Feat. React.js예제)"
date: 2017-07-27 12:08:24 +0900
categories: "css"
tags: [css, uppercase, lowercase, capitalize, react.js]

comments: true
share: true
slug: css/upper-lower-case-capitalize
---

CSS `text-transform` 속성을 사용하면 된다.(React는 textTransform)

- 대문자 변환 : uppercase
- 소문자 변환 : lowercase
- 첫글자만 대문자 변환 : capitalize

## 예제

### CSS

```css
p.uppercase {
  text-transform: uppercase;
}

p.lowercase {
  text-transform: lowercase;
}

p.capitalize {
  text-transform: capitalize;
}
```

### React.js

```js
var style = {
    textTransform: "capitalize"
}
<p style={style}></p>
```

```js
<p style={{ textTransform: "capitalize" }}></p>
```

> 이 블로그 테마에서 Liquid Template 때문에 `{` 두개를 연속으로 쓰면 Liquid 문법으로 인식해서 적용이 안된다. 그래서 `{ {`로 문법을 적용함.

## 참고

<https://www.w3schools.com/cssref/pr_text_text-transform.asp>
