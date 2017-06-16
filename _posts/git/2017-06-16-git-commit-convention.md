---
layout: post
title: "[Git] Commit Convention 좋은 커밋 메세지 작성법"
excerpt: "Convention을 지키면 Log보기도 편하다!"
created: 2017-06-16 16:16:22 +0900
date: 2017-06-16 16:16:22 +0900
categories: "git"
tags: [git,convention]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---
* Table of Contents
{:toc}

아래 참고사이트를 요약하였음.

* 한글 [좋은 git 커밋 메시지를 작성하기 위한 7가지 약속](http://meetup.toast.com/posts/106) - 네이버 토스트 밋업
* 영문 [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

## 1. 제목과 본문을 한 줄 띄워 분리

1. 50자 이내의 요약 문장
2. 빈 줄 하나
3. 설명문

위 가이드를 따르면 아래 명령어를 이용할 때 보기 편리함. + git에서 추천함
```
git log --oneline
git shortlog
```

## 2. 제목은 영문 기준 50자 이내

## 3. 제목 첫글자 대문자

## 4. 제목 끝에 `.` 금지

## 5. 제목은 `명령조`

git Built-in Convention을 따른다.

### 예문

Good
* (If applied, this commit will) Refactor subsystem X for readability

Bad
* (If applied, this commit will) Fixed bug with Y

## 6. 본문은 영문 기준 72자마다 줄 바꿈

## 7. 본문은 `어떻게`보다 `무엇을`, `왜`에 맞춰 작성

좋은 예

```
commit eb0b56b19017ab5c16c745e6da39c53126924ed6
Author: Pieter Wuille \<pieter.wuille@gmail.com\>
Date:   Fri Aug 1 22:57:55 2014 +0200

   Simplify serialize.h's exception handling

   Remove the 'state' and 'exceptmask' from serialize.h's stream
   implementations, as well as related methods.

   As exceptmask always included 'failbit', and setstate was always
   called with bits = failbit, all it did was immediately raise an
   exception. Get rid of those variables, and replace the setstate
   with direct exception throwing (which also removes some dead
   code).

   As a result, good() is never reached after a failure (there are
   only 2 calls, one of which is in tests), and can just be replaced
   by !eof().

   fail(), clear(n) and exceptions() are just never called. Delete
   them.
```

## [팁] 커밋 메세지로 Github 이슈(issue)를 자동 종료시키기

아래 문법으로 커밋 메세지를 남기면 default branch(master)에 푸시 될 때 이슈 닫힘.
```
키워드 #이슈번호
```

### Github 이슈 종료 키워드

* close
* closes
* closed
* fix
* fixes
* fixed
* resolve
* resolves
* resolved

### 관례

>close계열 : 일반 개발 이슈
>fix계열 : 버그 픽스, 핫 픽스 이슈
>resolve : 문의, 요청 사항에 대응한 이슈

### 예문

```
# 제목에 이슈 한 개 닫기를 적용한 사례
Close #31 - refactoring wrap-up

* This is wrap-up of refactoring main code.
* main.c
  * removed old comments
  * fixed rest indentations
  * method extraction at line no. 35


# 본문에 이슈 여러 개 닫기를 적용한 사례
Update policy 16/04/02

* This closes #128 - cab policy, closes #129 - new hostname, and fixes #78 - bug on logging.
* cablist.txt: changed ACL due to policy update delivered via email on 16/04/02, @mr.parkyou
* hostname.properties: cab hostname is updated
* BeautifulDeveloper.java: logging problem on line no. 78 is fixed. The `if` statement is never happening. This deletes the `if` block.
```