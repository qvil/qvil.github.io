---
layout: post
title: "[React.js] Create react app을 이용한 React.js 튜토리얼(State, Props)"
modified: 2017-06-26
categories: "react.js"
tags: [react.js, create-react-app, tutorial]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

>## <a href="https://github.com/qvil/react-tutorial" title="{{ site.owner.name}} on Github" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> Github : <https://github.com/qvil/react-tutorial>
>## Demo : [sandbox](https://codesandbox.io/s/github/qvil/react-tutorial)

Facebook이 만든 React.js가 무엇인지 예제를 통해서 알아보겠습니다.

>이번 강의에서는 `state`와 `props`에 대해서 알아보겠습니다.

## [React.js][React.js]란?
>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES 
>출처 : [React.js]

Facebook이 만든 View에 집중한 프레임워크입니다. View를 Component화 시켜서 재사용가능하도록 만든 프레임워크입니다.

## [create-react-app][create-react-app-github]으로 만드는 React.js 예제

>create-react-app은 Facebook에서 공식으로 권장하고, Redux를 만든 Facebook의 [Dan abramov][gaearon-github]가 만든 보일러플레이트 입니다.

### Node.js 설치
>[Node.js](https://nodejs.org/)에서 LTS버전으로 설치해주세요. LTS버전은 안정적입니다. :)

### Create-react-app 설치
아래 명령어로 설치할 수 있습니다. `-g`는 global의 약자로 컴퓨터에 설치되어 전역으로 사용할 수 있다는 뜻 입니다.
```sh
npm install -g create-react-app
```


### Create-react-app 실행
아래 그림처럼 실행해보세요.

```sh
create-react-app project-name
```

![create-react-app1](/images/create-react-app1.png)
![create-react-app2](/images/create-react-app2.png)

## 폴더구조
>아직은 public부분은 신경쓰지마세요.

- `/src/index.js`가 시작점입니다.
- 첫글자 대문자 CamelCase는 React component 네이밍 룰 입니다.(*주의*)

<script src="https://gist.github.com/qvil/30a0fac46cc79b3a6e8f50f6cbe2965d.js"></script>

>ES6문법을 사용하려면 webpack설정을 하고 babel로 컴파일 하는 방법을 사용하는데 create-react-app 패키지는 이 모든 과정을 자동으로 설정해줘서 react 진입장벽을 낮춰줍니다. 물론 나중에 config파일 설정도 `npm run eject`명령을 이용해서 가능합니다. (이 글에서는 ES6 문법과 webpack 및 babel에 대해서는 다루지 않습니다.)

import는 ES2015(이하 ES6)에서 새로 나온 문법입니다.
<del>ES5로 표현하면 이렇게 되겠네요. `var React = require('react');`</del>
**문법만 다르다고 생각했는데 실제 예제에서 ES5로 작성하면 동작하지 않습니다.**


## State
state란 component 내부의 상태를 저장하고 관리하는 공간입니다.

<script src="https://gist.github.com/qvil/3065e883091dfa003a3d2c1b96638863.js"></script>

`constructor()`의 내부에 `this.state = {}`형식으로 사용하시면 됩니다. constructor는 app이 처음 실행되면 실행되는 함수입니다. class와 constructor역시 ES6에서 등장한 문법입니다.

state를 사용할 때는 `this.state.number` 형식으로 사용하시면 됩니다.
아래 html과 비슷해 보이는 문법은 jsx문법으로써 텍스트는 html처럼 쓰고 프로그래밍적인 부분(변수, state 등)은 `{}`중괄호로 묶고 사용하면 됩니다.

## Props
`props`란 부모 컴포넌트에서 자식컴포넌트로 값을 넘겨줄 때 사용하는 속성입니다. 아래 예제를 참고하세요.

<script src="https://gist.github.com/qvil/e055ed4611cebe5dbcf3ee4aafa7eb26.js"></script>

<script src="https://gist.github.com/qvil/3065e883091dfa003a3d2c1b96638863.js"></script>

>**App.js가 부모, Header.js, Body.js가 자식 컴포넌트 입니다.**

`App.js`에서 자식 컴포넌트 `Header.js`에게 props로 값을 넘겨줍니다. `Body.js`에서 부모 컴포넌트 `App.js`로 부터 받은 값을 `constructor`의 `super()`가 실행되는 순간 사용할 수 있게 됩니다. 아래와 같은 방법으로도 `props`를 전달 받을 수 있습니다.

<script src="https://gist.github.com/qvil/b917f0e40a7cb07434a42851f6254393.js"></script>

코드가 조금 다르죠? 이런 컴포넌트를 `stateless component`라고 부르고 facebook에서는 권장합니다. 내부 state을 사용하지 않는다면 stateless component를 사용하는게 최적화도 잘되고 속도도 빠르다고 합니다.

## 요약 및 결론
-  **[React.js 공식페이지][React.js]가 가장 정확합니다.**
- Component 내부 상태 관리는 `state`
- 부모 Component에서 값을 받으려면 `props`
- State가 필요 없는 Component는 `Stateless Component`로 만들자.

## 참고
- [React.js 공식페이지][React.js]
- [Referencing Context in Stateless Functional Components](https://facebook.github.io/react/docs/context.html#referencing-context-in-stateless-functional-components)

[React.js]: https://facebook.github.io/react/
[create-react-app-github]: (https://github.com/facebookincubator/create-react-app#getting-started)
[gaearon-github]: https://github.com/gaearon
[blog]: https://qvil.github.io