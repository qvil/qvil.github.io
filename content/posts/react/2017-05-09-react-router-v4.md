---
title: "[React Router v4]SPA에서 다중페이지 구현(Feat. 성능최적화)"
created: 2017-05-09 15:55:05 +0900
date: 2017-07-24 08:28:05 +0900
categories: "react"
tags: [react.js, react-router]

comments: true
share: true
---

# React Router란?

React는 컴포넌트 기반의 SPA(Single Page Application)를 만드는데 최적화 되어있다. `/signin`, `/signup` 등 React로 여러 페이지를 구현하기 위해서 **React Router**를 사용합니다.

## Install

```sh
yarn add react-router-dom
# or, if you're not using yarn
npm install react-router-dom

```

# React Router Component

**Import 예제**

```js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

## Link

- `a`태그 이다.
- `to` prop을 이용하여 해당 url로 link시켜준다.
- exact를 붙이면 정확한 url에만 반응

```js
// /search에서도 홈이 나온다.
<Link to="/">홈</Link>
<Link to="/search">검색</Link>
// / 일때만 홈이 나오고 /search에서는 홈이 나오지 않음.
<Link exact to="/">홈</Link>
<Link to="/search">검색</Link>
```

## NavLink

각각 다른 링크에서 다른 스타일을 사용할 때 사용

## Route

- `path` props로 받은 path로 접속하면 `component` props의 컴포넌트로 연결시켜준다. 혹은 `render` props대로 render해준다.
- [Link](#link)와 마찬가지로 `exact`키워드 사용 가능.

```js
<Route exact path="/" component={Home} />
<Route path="/render" render={() => (
    <h3>Render Test</h3>
)} />
```

### Route component={컴포넌트}에서 props를 사용하고 싶다면

`render` 속성을 사용하면 된다.

**예제**

```js
<Route render={(props) => <MyComponent myProps="hello" />} />
```

## Redirect

아래 코드는 `logged가 false`이면 `/login/`으로 **redirect** 시켜준다.

```js
const logged = true;

const MyPage = () => {
  return <div>{!logged && <Redirect to="/login" />}내 페이지</div>;
};
```

## Switch

- Route컴포넌트를 감싸주면 호출된 URL컴포넌트만 호출한다.(불필요한 트래픽 방지)
- 마지막 Route컴포넌트로 404페이지 구현 가능

```js
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about/:username" component={About} />
  <Route component={NotFound} />
</Switch>
```

## 검색 쿼리 파라미터 location

`URLSearchParams`라는 자바스크립트 고유 함수 사용해서 아래와 같이 브라우저에서 호출

`http://localhost:3000/search?keyword=나`

```js
<div>{new URLSearchParams(location.search).get("keyword")} Search</div>
```

`나` 출력

## 참고(도움되는 사이트)

- [react router official tutorial](https://reacttraining.com/react-router/web/guides/quick-start)
- [velopert youtube lecture](https://www.youtube.com/watch?v=o6j8zi5mFIg&list=PL9FpF_z-xR_EZIjAVf7aZfKO5ZwnffraO&index=2)

<!-- Link -->

[github]: https://github.com/qvil/react-router-v4
