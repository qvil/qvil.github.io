---
title: "immer는 객체 비구조화 문법(Object Destructuring)을 사용하면 동작하지 않는다."
date: 2019-09-19 19:32:42 +0900
categories: "javascript"
tags: [javascript, immer]

comments: true
share: true
---

## [immer](https://github.com/immerjs/immer)는 객체 비구조화 문법(Object Destructuring)을 사용하면 동작하지 않는다.

아래는 redux에서 reducer쪽 immutable state를 immer로 handling하는 예제이다.

## 공통코드

```js
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Action Types
export const INCREMENT = "INCREMENT";
export const increment = createAction(INCREMENT);

const defaultState = {
  count: 0,
};
```

## X

```js
const reducer = handleActions(
  {
    [INCREMENT]: (baseState) =>
      produce(baseState, ({ count }) => {
        count = count + 1;
      }),
  },
  defaultState
);

export default reducer;
```

## O

```js
const reducer = handleActions(
  {
    [INCREMENT]: (baseState) =>
      produce(baseState, (draft) => {
        draft.count = draft.count + 1;
      }),
  },
  defaultState
);

export default reducer;
```
