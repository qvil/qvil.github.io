---
title: "[Node.js] Javascript Unit Test 프레임워크 Mocha"
date: 2017-06-21
categories: "javascript"
tags: [javascript, node.js, mocha, unit-test]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink:
comments: true
share: true
---

## 개요

> 영어가 익숙하면 아래 [참고](#참고)에 있는 공식사이트를 보시는 걸 추천합니다. 공식사이트만큼 좋은 문서는 없는 것 같습니다. 그럼에도 불구하고 한국어 문서가 익숙한 분들과 제 스스로 한번 더 보기 위해서 작성합니다.

## 설치

### npm global로 설치하거나

```sh
npm install --global mocha
```

혹은

```sh
npm i mocha -g
```

### 프로젝트 개발에만 종속되도록 설치

```sh
npm install --save-dev mocha
```

혹은

```sh
npm i mocha -D
```

## 실행

`test/test.js`에 테스트 코드를 넣고 프로젝트에 설치했으면

```sh
./node_modules/mocha/bin/mocha
```

글로벌 설치를 했으면

```sh
mocha
```

명령어로 실행.

> [`package.json` 설정](#packagejson-설정)을 통해서 간편하게 커스터마이징해서 사용하는 것을 추천합니다.

### 테스트 코드

```js
var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
```

#### 테스트 코드 해설

1. `assert`[^1]모듈을 사용하기 위해서 require로 불러옴.
1. `describe`함수는 `suite`라고 불리는 함수의 설명이라고 생각. 중첩 가능.
1. `it`함수는 실제 테스트 케이스를 작성하는 곳.
   1. 첫번째 인자로 테스트 케이스의 설명을 쓰고
   1. 두번째 인자로 테스트코드를 콜백함수로 작성.
1. 배열에 4가 없는데 `indexOf(4)`로 4를 찾으므로(indexOf함수는 인자값이 해당 객체에 있으면 위치를 숫자로 출력하거나 없으면 -1을 출력)

### 테스트 결과

#### 성공

![mocha-success](/images/mocha-success.png)

#### 실패

> 배열에 4 추가함. `assert.equal(-1, [1,2,3,4].indexOf(4));`

![mocha-fail](/images/mocha-fail.png)

<!--```sh
Array
    #indexOf()
      ✓ Should return -1 when the value is not present


  1 passing (10ms)
```-->

### `package.json` 설정

`.spec.js`파일을 찾아서 감시옵션(`-w`)을 주고 실행하면 파일이 변경될 때마다 자동으로 테스트가 실행됩니다.

```js
"scripts": {
    "test": "./node_modules/mocha/bin/mocha $(find . -name '*.spec.js') --recursive -w"
  },
```

```sh
npm test
```

혹은

```sh
npm run test
```

## 참고

- <https://mochajs.org/#installation>
- [김정환 블로그 - NodeJS에서 가장 많이 사용하는 테스트 프레임웍, Mocha](http://blog.jeonghwan.net/mocha/)

---

[^1]: [Assert module of Node.js](http://unitjs.com/guide/assert-node-js.html)
