---
layout: post
title: "[한국어,EN] React Type Check with prop-types"
date: 2018-04-20 23:29:46 +0900
categories: "react"
tags: [react,prop-types]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

<!-- TOC -->

* [1. React Type Check with prop-types](#1-react-type-check-with-prop-types)
* [2. 예제(Example)](#2-예제example)
* [3. 코드(Code)](#3-코드code)
* [4. 참고(Reference)](#4-참고reference)

<!-- /TOC -->

# 1. React Type Check with prop-types

React Component 를 만들다가 type 을 체크해야 할 필요성을 느꼈다.(I felt that check the type of react component)

# 2. 예제(Example)

```js
<WrappedComponent title="title" subheader="subheader" avatar={<Face />}>
  {"Hello World"}
</WrappedComponent>
```

커스텀 컴포넌트를 만드는데 `avatar` prop 에는 꼭 component 를 받아야하고 `children` props 에는 아무거나 받아도 상관없는 타입체크를 하고 싶다.  
(To create a custom component, I need to get a component type in the `avatar` prop and to get anything in `children` prop)

# 3. 코드(Code)

```js
CollapseCard.propTypes = {
  children: PropTypes.node,
  avatar: PropTypes.element,
  title: PropTypes.string,
  subheader: PropTypes.string
};
```

# 4. 참고(Reference)

* https://reactjs.org/docs/typechecking-with-proptypes.html
* https://www.npmjs.com/package/prop-types
