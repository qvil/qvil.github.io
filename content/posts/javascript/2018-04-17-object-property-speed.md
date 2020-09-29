---
title: "[JS] Object 속성 갯수에 따라 참조하는 속도가 달라질까? No"
date: 2018-04-17 16:27:32 +0900
categories: "javascript"
tags: [javascript, object]

comments: true
share: true
slug: javascript/object-property-speed
---

<!-- TOC -->autoauto- [1. Summary](#1-summary)auto- [2. Why](#2-why)auto- [3. Test Code](#3-test-code)auto- [4. Result](#4-result)autoauto<!-- /TOC -->

# 1. Summary

<span style="color: red">No</span>

# 2. Why

왜 Object 속성 갯수 참조 속도가 궁금했을까?

Redux 에서 bindActionCreators 를 사용해서 Action 을 모두 Injection 시켜주는 패턴이 있는데

```js
import * as FirstActionCreators from "redux/FirstAction";
import * as SecondActionCreators from "redux/SecondAction";
import * as ThirdActionCreators from "redux/ThirdAction";

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...FirstActionCreators,
      ...SecondActionCreators,
      ...ThirdActionCreators,
    },
    dispatch
  ),
});
const MyComponentContainer = connect(null, mapDispatchToProps)(MyComponent);

export default MyComponentContainer;
```

위 코드는 개발자가 사용하기에는 편리하지만 쓸데없는 Action 까지 모두 Injection 된다는 단점이 있다. (FirstAction.a 만 필요해도 FirstAction.b, c... 모두 props 로 접근 가능해진다.)그렇다면 쓸데없는 Action 이 Object 의 Property 로 Injection 되면 성능에 영향을 미칠까?

# 3. Test Code

```js
const miniObj = {
  1: 1,
  2: 2,
};
let maxObj = {};
for (let index = 0; index < 100000; index++) {
  maxObj[index] = index;
}

let startMax = Date.now();
console.log(maxObj[50000]); // Object 속성 접근
let endMax = Date.now();
let elapsedMax = endMax - startMax;
console.log(`elapsedMax : ${elapsedMax}`); // 경과 시간

let startMin = Date.now();
console.log(miniObj[1]); // Object 속성 접근
let endMin = Date.now();
let elapsedMin = endMin - startMin;
console.log(`elapsedMin : ${elapsedMin}`); // 경과 시간
```

# 4. Result

![object_property_speed.png](/images/object_property_speed.png)

Object 속성이 10 만개 생겨도 속도 차이는 거의 없다.

나는 일단 그냥 편하게 쓰기로 했다.
