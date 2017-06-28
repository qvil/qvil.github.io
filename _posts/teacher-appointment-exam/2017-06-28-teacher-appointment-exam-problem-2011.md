---
layout: post
title: "[중등교사임용시험] C언어 2011년도 문제 및 풀이"
modified: 2017-06-28
categories: "teacher appointment exam"
tags: [teacher appointment exam, 중등교사임용시험, C, 2011]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 문제

```c
#include <stdio.h>

int main(void)
{
    int score[10] = {1, 2, 3, 4, 5};
    int i, op = 2, sum = 0;
    switch (op)
    {
    case 1:
        for (i = 0; i < 10; i++)
            sum += score[i];
        printf("%d \n", sum);
        break;
    case 2:
        for (i = 3; i < 10; i++)
            sum += score[i];
        printf("%d \n", sum);
    default:
        for (i = 5; i < 10; i++)
            sum += score[i];
        printf("%d \n", sum);
        break;
    }
    return 0;
}
```

## 해설
1. op = 2이므로 case 2: 부분만 보면 된다.
1. for문을 통과()
    1. score[3] = `4`, sum = `4`
    1. score[4] = `5`, sum = `9`
        - `9` 출력
    1. <span style="color: red;font-weight: bold">switch문에서 `break`가 없으면 계속 다음으로 넘어간다.</span> 위 코드에서는 default: 로 간다.(case에 조건이 맞지 않으면 무조건 defalt로 간다.) 만약 case에서 `break` 혹은 `return`을 하면 switch문을 빠져나온다.
    1. default에서 score[5]에는 값이 들어있지 않다.(쓰레기값) 값이 없으므로 `sum += score[i];`연산은 이뤄지지 않고 `printf`한다. `sum`의 값이 변하지 않았으므로 `9` 출력.
        - `9` 출력

## 결과
```
9
9
```

## 참고
아래 두 코드는 같다.
```c
sum += score[i];
```
```c
sum = sum + score[i];
```