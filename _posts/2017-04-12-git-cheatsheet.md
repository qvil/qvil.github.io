---
layout: post
title: "[Git] Cheat Sheet"
excerpt: "Git Command & Tip"
modified: 2017-04-12 09:17:50 +0900
categories: 
tags: [git]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---
* Table of Contents
{:toc}

## 브랜치에서 특정파일 patch

특정 branch에서 특정 파일 혹은 폴더만 Update하고 싶을 때

```shell
$ git checkout --patch {bracnh} {file or folder}
```

## 로컬 브랜치 삭제

```shell
$ git branch -d {branch_name} # merge 후 쓸모없는 브랜치만 삭제됨
$ git branch -D {branch_name} # 강제로 삭제 가능
```

## 원격 브랜치 삭제

**checkout 안하고 해도 됨.**
```shell
$ git push --delete {remote} {branch}
```

## 리모트 저장소 추가

원하는 디렉토리에서 git init 후

```shell
$ git remote add origin {remote_name}
$ git fetch # 리모트 저장소의 파일, 브랜치 등을 가져온다.
```

## Tag 

Tag 추가 후 `git push {remote} {tag}`

### Annotated tag

```shell
$ git tag -a v1.4 -m 'my version 1.4'
```

### Lightweight tag

```shell
$ git tag v1.4-lw
```

## 여러줄로 Commit

1. VSCode같은 에디터 이용하거나
2. 명령줄에서 "를 시작하고 닫지 않고 엔터입력
3. **그냥 `git commit` 하면 텍스트에디터 열림**

* 2번예제
```sh
$ git commit -m "
> Commit
> OK
> "
```

<figure>
	<img src="/images/git-commit-example.png" alt="image">
	<figcaption>3번 예제</figcaption>
</figure>

## Log

[6.4 Git 도구 - 히스토리 단장하기](https://git-scm.com/book/ko/v1/Git-도구-히스토리-단장하기)

* 파일 라인별 변경사항 보고 싶을 때 -p
```sh
$ git log -p {filename}
```
* 특정키워드 변경 확인
```sh
$ git log -p {filename} | grep '2011070102\|commit \|Author:\|Date:'
```
* 단어기준 diff
```sh
$ git log -p --word-diff {filename}
```

## 마지막 커밋 수정

자동으로 텍스트 편집기 실행됨.

```shell
$ git commit --amend
```

## Git revision 복구

```sh
$ git reset --hard {리비전번호} // history를 없앤다.
$ git reset --soft {리비전번호} // history를 남긴다.
```

## Git으로 버그 찾기

참고 [공식사이트 : Git으로 버그 찾기](https://git-scm.com/book/ko/v1/Git-도구-Git으로-버그-찾기)

```sh
$ git blame {filename}
$ git blame -L 10,20 {filename} // 10번 줄에서 20번 줄까지 탐색
$ git blame -C {filename} // 리팩토링된 파일 추적 가능
```