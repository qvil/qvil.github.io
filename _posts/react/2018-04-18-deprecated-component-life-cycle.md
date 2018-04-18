---
layout: post
title: "[React] Deprecated Component Lifecyle(e.g. componentWillReceiveProps)"
date: 2018-04-18 12:45:21 +0900
categories: "react"
tags: [react,lifecycle,componentWillReceiveProps,getDerivedStateFromProps]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

<!-- TOC -->

* [1. Summary](#1-summary)
* [2. Content](#2-content)
  * [2.1. Why Deprecated?](#21-why-deprecated)
* [3. Example](#3-example)
  * [3.1. Previous Code](#31-previous-code)
  * [3.2. Improved Code](#32-improved-code)
* [4. Reference](#4-reference)

<!-- /TOC -->

# 1. Summary

React v16.3 에서 발표한 [Component Lifecycle Changes](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)를 참고하면
Unsafe 한 Lifecycle 메서드(componentWillMount(), componentWillReceiveProps(), componentWillUpdate())를 React v17 이후부터는 사용 할 수 없습니다.

> v17 에서는 사용 가능하지만 "UNSAFE\_" prefix 를 붙여서 사용 가능합니다.

그리고 새로운 2 가지 LifeCylce 메서드를 추가합니다.(Deprecated 된 메서드 대체 가능)

* [getDerivedStateFromProps](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
* [getSnapshotBeforeUpdate](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)

# 2. Content

React v16.3 에서 [Component Lifecycle Changes](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)에 대해서 발표했습니다. [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)을 보면 몇가지 변경된 점이 보입니다. 예를 들어 `static getDerivedStateFromProps()`처럼 새로 생긴 메서드도 있고 `UNSAFE_componentWillMount()`처럼 기존의 메서드에 `UNSAFE_`가 prefix 로 붙은 메서드를 볼 수 있습니다.

예시로 [UNSAFE_componentWillMount()](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount) 문서를 보면 기존의 설명 밑에 아래와 같은 Note 가 있습니다.

> **Note**  
> This lifecycle was previously named componentWillMount. That name will continue to work until version 17. Use the rename-unsafe-lifecycles codemod to automatically update your components.

## 2.1. Why Deprecated?

[Learn more about this recommendation here.](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)

1.  Many of these issues are exacerbated by a subset of the component lifecycles
1.  These also happen to be the lifecycles that cause the most confusion within the React community(React 커뮤니티에서 가장 혼란을 가져오는 LifeCycle)

# 3. Example

이 예제에서는 `componentWillReceiveProps`를 `static getDerivedStateFromProps`로 바꿔보겠습니다.

## 3.1. Previous Code

```js
componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.setState({ name: nextProps.name });
    }
  }
```

`componentWillReceiveProps`를 사용하면 `this.props`와 `nextProps`를 비교해서 `setState`해주는 방식으로 구현했습니다.

## 3.2. Improved Code

```js
static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.name !== nextProps.name) {
      return { name: nextProps.name };
    }

    return null;
  }
```

`static getDerivedStateFromProps`를 사용하면 **`this.props`나 `this.state`에 접근하지 않고** `nextProps`와 `prevState`를 비교하여 **변경될 state 를 return 해주면 됩니다. (setState 가 아닙니다.)**

주의 할 점으로

> Note that if a parent component causes your component to re-render, this method will be called even if props have not changed. You may want to compare new and previous values if you only want to handle changes.

> Calling this.setState() generally doesn’t trigger getDerivedStateFromProps().

출처 : https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

라고 합니다.

부모 컴포넌트에 의해서 컴포넌트가 re-rendering 되면 prop 이 변경되지 않아도 이 메서드가 호출되므로 주의하라고 합니다. 변경 사항만 처리하려면 새로운 값과 이전의 값을 비교하면 된다고 합니다.

# 4. Reference

* https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
* https://reactjs.org/docs/react-component.html#the-component-lifecycle
