---
layout: post
title: "[중등교사임용시험-전기전자통신] C언어 2011년도 문제 및 풀이(Feat. 배열과 memset()차이)"
modified: 2017-06-28
categories: "teacher appointment exam"
tags: [teacher appointment exam, 중등교사임용시험, 전기전자통신, C, 2011, array, memset]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 문제

<script src="https://gist.github.com/qvil/d77d80925b482411cf8c3b88f1de6431.js"></script>

## 해설
1. op = 2이므로 case 2: 부분만 보면 된다.
1. for문을 통과()
    1. score[3] = `4`, sum = `4`
    1. score[4] = `5`, sum = `9`
        - `9` 출력
    1. <span style="color: red;font-weight: bold">switch문에서 `break`가 없으면 계속 다음으로 넘어간다.</span> 위 코드에서는 default: 로 간다.(case에 조건이 맞지 않으면 무조건 defalt로 간다.) 만약 case에서 `break` 혹은 `return`을 하면 switch문을 빠져나온다.
    1. default에서 score[5]에는 `0`으로 초기화된 값이 들어있다. `sum += score[i];` `sum`에 계속 0을 더하면 `sum`의 값이 변하지 않으므로 `9` 출력.
        - `9` 출력

## 결과([온라인 실행](https://www.tutorialspoint.com/compile_c_online.php))
```
9
9
```

## 참고
>아래 두 코드는 같다.

```c
sum += score[i];
```
```c
sum = sum + score[i];
```

>배열에 값을 정해주지 않으면 `0`으로 초기화 된다.

배열초기화
- [tipssoft](http://www.tipssoft.com/bulletin/board.php?bo_table=FAQ&wr_id=741)
- [hashcode - C 배열을 초기화하는 방법](http://hashcode.co.kr/questions/741/c-배열을-초기화하는-방법)
    - 답변 마지막에 이런 말이 나온다.
    >여기서 말하는 0은 메모리공간의 처음부터 끝까지 전부 0으로 설정된다는 의미는 아니기 때문에(char는 \0등) memset()과는 좀 다른 의미입니다.

>0으로 설정과 memset()이 다르다? (char는 \0)??

이 부분이 헷갈려서 더 찾아본 결과 결론부터 말하자면 **배열 자동 초기화는 컴파일러 환경에 따라서 결과가 다를 수 있다.(`memset()`은 같다.)**

**이유**
- 배열이 자동으로 `0`으로 초기화 되는 것은 배열에 `0`을 대입한 것과 같다.
    - int형을 32bit 컴파일러는 4byte로 인식하고, 16bit 컴파일러는 2byte로 인식한다. => **메모리 구조가 다르다.**
- `memset()`으로 초기화 하면 Byte단위로 `0`으로 초기화 하기 때문에 컴파일러 환경에 관계 없이 **메모리 구조가 같다.**

**참고링크**
- [Quora - How is an integer value stored in the memory in C?](https://www.quora.com/How-is-an-integer-value-stored-in-the-memory-in-C)
- [Stackoverflow - Using memset to set an array](https://stackoverflow.com/questions/11528955/using-memset-to-set-an-array)