---
title: "[Node.js] Express CORS 이슈 해결 방법"
date: 2017-07-24
categories: "node.js"
tags: [node.js, express, cors, ajax]

comments: true
share: true
---

## CORS란?

Frontend에서 주소가 다른 Backend API를 참조하려고 하면 나는 에러입니다.

localhost에서 테스트한 분들도 이런 이슈를 겪고 오셨을거라 생각합니다.

예) Frontend : localhost:3000, Backend : localhost:4000 // port가 다르므로 다른 주소로 인식.

> 보안 상의 이유로, 브라우저들은 스크립트 내에서 초기화되는 cross-origin HTTP 요청을 제한합니다 출처 : [MDN HTTP 접근 제어 (CORS)][mdn-cors]

## 해결방법

### 모든 CORS 요청 허용

**예제**

```js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
```

## 참고

- [MDN HTTP 접근 제어 (CORS)][mdn-cors]
- <https://github.com/expressjs/cors>

[mdn-cors]: https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS
