---
layout: post
title: "[React.js] state선언을 constructor에서 하는 것과 property로 하는 것의 차이(Difference to define state in constructor or using property)"
date: 2017-08-08 10:37:49 +0900
categories: "react.js"
tags: [javascript, react.js, state-define]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 예제(Example)

```js
// Code goes here
class First {
  state = {
    value: true
  }
};

class Second {
  constructor () {
    this.state = {
      value: true
    };
  }
};
```

## Babel로 변환(Compile using babel)
```js
// Code goes here
class First {
  constructor() {
    this.state = {
      value: true
    };
  }

};

class Second {
  constructor() {
    this.state = {
      value: true
    };
  }
};
```

## 결론(Conclusion)
state선언을 constructor에서 선언하는 것과 class property로 선언하는 것은 **같다.**

## 참고(Reference)
[example-babel](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=react%2Cstage-0&targets=&browsers=&builtIns=false&debug=false&code_lz=PTAEGEHsBMFNQOaVgZ1AC1gJ1gKAMYA2AhimgGICWWKALqAN66ih3G3wC8jzLoAbsUIBXWAC5QtLKN4BfXLIDcuAiTKgAyrHyQAdtB4sduutPy1IWUAAoAlIb610lFADo2HUNyZ8-gkeKS0ni-SnIKykA&experimental=false&loose=false&spec=false)
