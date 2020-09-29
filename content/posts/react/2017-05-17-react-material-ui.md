---
title: "[React.js] Material UI"
excerpt: "React.js와 Material-UI를 사용해서 Material Design UI를 만들어보자(Feat. Material Icon, SvgIcon)"
created: 2017-05-17 14:26:41 +0900
date: 2017-05-17 14:26:41 +0900
categories: "react.js"
tags: [react.js, material-design]

comments: true
share: true
slug: react/react-material-ui
---

- Table of Contents
  {:toc}

## [Material-UI][material-ui]

![material-ui-web](/images/material-ui-web.png)

React.js를 사용하면서 Material Design을 구현한 프론트엔드 프레임워크를 찾다가 최선이라고 생각하게된 프레임워크다. 이유는 아래와 같다.

## 1. 방대한 양의 데이터(Github규모, 구글검색자료 등)

## 2. 리액트의 장점 그대로 사용 가능

- [Materialize](http://materializecss.com/)와 같은 프레임 워크도 있으나 리액트의 Virtual DOM 개념에 위배되는 jQuery사용으로 배제(꼭 성능 이슈아니면 오히려 사용하기는 쉬울수도 있다.)

## 3. 사용자 커스터마이징

### 테마

테마를 쉽게 바꿀 수 있다. 문서도 잘 되어있고 테마별로 css를 분리해서 설계하는 것이 아니라 `<MuiThemeProvider />` 컴포넌트에 `getMuiTheme`함수를 이용하여(안해도 됨) `muiTheme`속성을 주는것 만으로도 테마가 바뀐다는 점이 마음에 들었다.

**예제 코드**

```js
const muiTheme = getMuiTheme({
  palette: {
    textColor: pink500,
  },
  appBar: {
    color: blue500,
  },
});
<MuiThemeProvider muiTheme={muiTheme}>
```

**예제 이미지**
![material-ui-themes](/images/material-ui-themes.gif)

### 아이콘

[Google의 공식 Material Icon][material-icons]을 **전부**지원한다. 이 부분이 너무 마음에 들어서 조금 더 자세히 포스팅한다.

Material UI는 여러가지 React Coding Conventions를 준수한다. 예를들어 `Component는 첫글자 대문자에 Camel Case로 네이밍`한다. 라던가 이건 filename에서 공백은 `-`(dash)로 표현한다(이건 컨벤션 맞는지 모름). 아무튼 잘 규칙된 코드 덕분에 SvgIcon 적용도 쉽게 할 수 있었다.

```js
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
```

위 코드는 공식사이트에서 사용하는 코드이다. more-vert icon은 찾았지만 문서에 icon 목록이 없어서 헤매다가 문서에서 아래와 같은 글을 보았다(답은 문서에 있다).

> For convenience, the full set of google Material icons are available in Material-UI as pre-built SVG Icon components. [material-ui]

딱 한 줄이다. Material 아이콘들을 전부 지원한다고 한다. 만약 내가 lock icon을 사용하고 싶으면 [material-icons]에 들어가서

1. lock검색을 하거나 직접 아이콘을 골라도 된다.
2. 고른 아이콘의 카테고리와 이름을 component이름은 `첫문자 대문자 CamelCase에 Icon을 붙인다.` 파일 이름은 `소문자(공백은 '-')`로 import해서 사용한다.

**예제**
![material-ui-svg-icon](/images/material-ui-svg-icon.png)

```js
import LockIcon from "material-ui/svg-icons/action/lock";
import LockOpenIcon from "material-ui/svg-icons/action/lock-open";
```

**결과**

![material-ui-svg-icon-result](/images/material-ui-svg-icon-result.png)

### 팁

import를 아래 **팁**처럼 해도 된다.

**공식예제**

```js
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import Divider from "material-ui/Divider";
```

**팁**

```js
import { IconMenu, MenuItem, IconButton, Divider } from "material-ui";
```

<!-- Link -->

[material-ui]: http://www.material-ui.com/#/components/svg-icon
[material-icons]: https://material.io/icons/
