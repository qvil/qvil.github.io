---
layout: post
title: "[한국어, EN] React Native import 환경 설정(import setting)"
date: 2018-04-22 17:24:37 +0900
categories: "react native"
tags: [react-native]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

views/index.js

```js
export { default as Singin } from "./Singin";
```

App.js

```js
import { Signin } from "views";
```

위 코드는 안되는데  
(The above code does not work)

components/index.js

```js
export { default as MyComponent } from "./MyComponent";
```

Signin.js

```js
import MyComponent from "components/MyComponent";
```

아래 코드는 된다.  
(But this code is work)

!?!?!? 왜?(Why?)

> To be continue...
