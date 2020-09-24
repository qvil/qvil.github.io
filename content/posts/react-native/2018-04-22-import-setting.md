---
title: "[한국어, EN] React Native import 환경 설정(import setting)"
date: 2018-04-22 17:24:37 +0900
categories: "react native"
tags: [react-native]

comments: true
share: true
slug: import-setting
---

<!-- TOC -->autoauto- [1. 프로젝트 구조(Project Structure)](#1-프로젝트-구조project-structure)auto- [2. 동작 안하는 예제(Not work example)](#2-동작-안하는-예제not-work-example)auto- [3. 동작 하는 예제(Work Example)](#3-동작-하는-예제work-example)auto- [4. 원인 분석(Cause Analysis)](#4-원인-분석cause-analysis)autoauto<!-- /TOC -->

# 1. 프로젝트 구조(Project Structure)

![project_structure.png](/images/project_structure.png)

.babelrc

```json
"plugins": [
  [
    "module-resolver",
    {
      "root": ["./src"],
      "extensions": [".js", ".ios.js", ".android.js"]
    }
  ]
]
```

create-react-native-app 을 사용했고, `src`폴더를 root 로 설정했다.  
(I use the create-react-native-app and Set the `src` directory to root)

views/index.js

# 2. 동작 안하는 예제(Not work example)

```js
export { default as Singin } from "./Singin";
```

App.js

```js
import { Signin } from "views";
```

위 코드는 안되는데  
(The above code does not work)

# 3. 동작 하는 예제(Work Example)

components/index.js

```js
export { default as MyComponent } from "./MyComponent";
```

Signin.js

```js
import MyComponent from "components/MyComponent";
```

이 코드는 된다.  
(But this code is work)

!?!?!? 왜?(Why?)

> To be continue...

# 4. 원인 분석(Cause Analysis)

![project_structure2.png](/images/project_structure2.png)

시작 지점인 `App.js`가 `src`폴더 밖에 있는데 이게 원인이 될 수 있을까?  
(This project entry point is `App.js` is outside the `src` directory. Could this be the cause?)
