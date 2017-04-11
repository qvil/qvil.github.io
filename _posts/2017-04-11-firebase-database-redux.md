---
layout: post
title: "[Firebase] Database와 Redux 함께 사용"
excerpt: "Firebase의 Database를 Redux로 컨트롤 하는 방법"
modified: 2017-04-11 14:16:47 +0900
categories: 
tags: [firebase,redux]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---
* Table of Contents
{:toc}

## 데이터 변경 감지

[Firebase 메뉴얼](https://firebase.google.com/docs/database/web/read-and-write?hl=ko#listen_for_value_events)을 참고하면
>특정 경로의 데이터를 읽고 변경을 수신 대기하려면 firebase.database.Reference의 on() 또는 once() 메소드를 사용하여 이벤트를 관찰합니다.

따라서 Firebase에서 `on()`이나 `once()`메소드로 이벤트를 관찰하고 있어야 한다.

## Redux state 변경(Action 전달)

[velopert강좌](https://velopert.com/1225)를 참고하면
>Redux 매뉴얼을 보면, “The only way to mutate the state is to emit an action, an object describing what happened.” (번역: state를 변경하는 유일한 방법은 어떤일이 발생했는지 나타내주는 action 객체를 전달하는것이다) 라고 적혀있습니다.

>즉, 어플리케이션에서 state를 직접 변경 할 수는 없다는 의미입니다. state 를 변경하기 위해서는, action 이 dispatch 되어야 합니다. (dispatch 는 ‘보낸다’는 뜻 입니다)  action 은, 어떤 변화가 일어나야 할 지 알려주는 객체입니다.

따라서 Firebase에서 `on()`메소드로 데이터의 변경이 콜백함수의 snapshot으로 전달(`(snapshot) => {}`) 된다면. `Action`을 `Dispatch` 해야한다. 

## 결론

**`Component`에서 `on()`이나 `once()`메소드로 이벤트를 관찰하고 해당 콜백함수에서 Action을 Dispatch하는 방법으로 Redux의 State를 변경해야 한다.** 
물론 내가 만드는 App의 경우이고 다른 예제를 보면 Firebase를 Core로 분리하여 처리하기도 하지만 가장 중요한 것은
* 어플리케이션에서 State를 직접 변경 할 수 없다.
* State를 변경하기 위해서는 Action이 Dispatch되어야 한다.