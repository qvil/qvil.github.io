---
title: "[Git]개행문자문제 해결방법"
date: 2017-05-17
tags: [git, linux]
comments: true
share: true
---

- Table of Contents
  {:toc}

## 원인

### 운영체제별로 개행문자를 다르게 인식한다.

- 윈도우 : CR(Carriage Return `\r`)과 LF(LineFeed `\n`)사용
- 리눅스/맥 : LF(LineFeed `\n`)만 사용

> [How to change line-ending settings][stackoverflow]

> Line ending format used in OS
>
> - Windows: CR (Carriage Return \r) and LF (LineFeed \n) pair
> - OSX,Linux: LF (LineFeed \n)

## 해결방법(2번 추천)

### 1. Git global 설정 이용

### 리눅스/맥

아래 설정은 커밋할 때 CRLF를 LF로 바꿔서 커밋해준다.

```
git config --global core.autocrlf input
```

### 윈도우

아래 명령어는 체크인할 때 LF를 CRLF로 바꿔준다.

```
git config --global core.autocrlf true
```

### 2. `.gitattributes` 파일 이용

프로젝트의 git root폴더(.git폴더 있는 곳)에 `.gitattributes`파일을 만들면 **별도의 설정이 필요 없다.**

```
* text=auto
```

좀 더 명시적으로 쓰고 싶다면

```
* text eol=crlf
* text eol=lf
```

jpg를 바이너리형태로 관리하는 것도 가능하다.

```
*.jpg binary
```

### `.gitattributes`파일 예시 [Gist](https://gist.github.com)

<script src="https://gist.github.com/qvil/10ba39ee4451278cb8b8222cb7617311.js"></script>

## 참고

- [Dealing with line endings(github)][github]
- [How to change line-ending settings(stackoverflow)][stackoverflow]
- [git 에서 CRLF 개행 문자 차이로 인한 문제 해결하기(lesstif)][lesstif]

<!-- 링크 -->

[github]: https://help.github.com/articles/dealing-with-line-endings/
[stackoverflow]: http://stackoverflow.com/questions/10418975/how-to-change-line-ending-settings
[lesstif]: https://www.lesstif.com/pages/viewpage.action?pageId=20776404
