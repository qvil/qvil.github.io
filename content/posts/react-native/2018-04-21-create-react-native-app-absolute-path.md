---
title: "[한국어, EN] Create React Native App import 절대경로 설정(Absolute Path)"
date: 2018-04-21 13:36:57 +0900
categories: "react native"
tags: [react-native, create-react-native-app, absolute-path]

comments: true
share: true
---

<!-- TOC -->

- [1. 초기 설정(Initial Setting)](#1-초기-설정initial-setting)
- [2. `babel-plugin-module-resolver` 설치(Install `babel-plugin-module-resolver`)](#2-babel-plugin-module-resolver-설치install-babel-plugin-module-resolver)
- [3. `.babelrc` 수정(Edit `.babelrc`)](#3-babelrc-수정edit-babelrc)
- [4. 예제 코드(Example Code)](#4-예제-코드example-code)
- [5. 참고(Reference)](#5-참고reference)

<!-- /TOC -->

# 1. 초기 설정(Initial Setting)

참고(Reference) : https://github.com/react-community/create-react-native-app

```
create-react-native-app my-app
```

# 2. `babel-plugin-module-resolver` 설치(Install `babel-plugin-module-resolver`)

```
npm install babel-plugin-module-resolver -D
```

# 3. `.babelrc` 수정(Edit `.babelrc`)

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

> 캐시를 비우고 다시 시작한다.(Empty the cache and restart)

```
npm start --reset-cache
```

root 에 원하는 경로를 넣으면 된다. 아래 [예제](#4-예제-코드example-code)에서는 `src`를 root 로 설정했다.  
(Input the path in root. In the following [example](#4-예제-코드example-code), set `src` to root)

# 4. 예제 코드(Example Code)

만약 `/src/component/MyComponent`를 import 하려면 아래와 같이 작성한다.  
(If you import from `/src/component/MyComponent` type below code)

```js
import MyComponent from "components/MyComponent";
```

# 5. 참고(Reference)

- https://github.com/react-community/create-react-native-app
- https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md#usage-with-react-native
