---
layout: post
title: "[JSON] 팁 - Json Key가 숫자라면?"
modified: 2017-06-30
categories: "json"
tags: [json, tip, key-number]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 해결
```js
json["0Key"].value;
```

## 예제
**myJson.json**

```json
{
    "myKey": {
        value: 1
    },
    "0Key": {
        value: 0
    }
}
```

**myApp.js**
```js
import myJson from './myJson.json';

console.log(myJson.myKey.value); // 1
console.log(myJson.0key.value); // Error
console.log(myJson["0key"].value); // 0
```