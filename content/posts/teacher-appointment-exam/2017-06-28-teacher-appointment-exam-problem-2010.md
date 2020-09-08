---
title: "[중등교사임용시험-전기전자통신] C언어 2010년도 문제 및 풀이"
date: 2017-06-28
categories: "teacher appointment exam"
tags: [teacher appointment exam, 중등교사임용시험, 전기전자통신, C, "2010"]

comments: true
share: true
---

## 문제

<script src="https://gist.github.com/qvil/45934492e301403f73aa19f7aaa242e2.js"></script>

```c
#include <stdio.h>

void print_r(int a[], int n);

int main(void)
{
    int a[] = {10, 20, 30, 40, 50};
    print_r(a, 5);
    return 0;
}
void print_r(int a[], int n)
{
    int *p = a + 1;
    while (p >= a)
    printf("%d\n", *p--);
}
```

## 해설

1. `print_r`함수의 첫번째 인자로 **`a`배열의 시작 주소**를 넘겨준다.
   1. score[3] = `4`, sum = `4`
   1. score[4] = `5`, sum = `9`
      - `9` 출력
   1. <span style="color: red;font-weight: bold">switch문에서 `break`가 없으면 계속 다음으로 넘어간다.</span> 위 코드에서는 default: 로 간다.(case에 조건이 맞지 않으면 무조건 defalt로 간다.) 만약 case에서 `break` 혹은 `return`을 하면 switch문을 빠져나온다.
   1. default에서 score[5]에는 값이 들어있지 않다.(쓰레기값) 값이 없으므로 `sum += score[i];`연산은 이뤄지지 않고 `printf`한다. `sum`의 값이 변하지 않았으므로 `9` 출력.
      - `9` 출력

## 결과([온라인 실행](https://www.tutorialspoint.com/compile_c_online.php))

```
20
10
```

## 참고

- c언어는 절차지향형 언어이므로 `main`함수 위에 함수를 선언하고 `main`함수 아래에 함수를 만들어서 사용하거나
- 함수를 `main`함수 위에 만들어서 사용하면 선언하지 않아도 된다.

> 아래 두 코드는 같다.

```c
#include <stdio.h>

void print_r(int a[], int n);

int main(void)
{
    int a[] = {10, 20, 30, 40, 50};
    print_r(a, 5);
    return 0;
}
void print_r(int a[], int n)
{
    int *p = a + 1;
    while (p >= a)
    printf("%d\n", *p--);
}
```

```c
#include <stdio.h>

void print_r(int a[], int n)
{
    int *p = a + 1;
    while (p >= a)
    printf("%d\n", *p--);
}

int main(void)
{
    int a[] = {10, 20, 30, 40, 50};
    print_r(a, 5);
    return 0;
}
```
