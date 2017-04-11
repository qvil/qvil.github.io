---
layout: post
title: "gitconfig"
excerpt: "[Git] gitconfig 파일로 단축키 및 환경 설정"
modified: 2017-04-12 00:11:24 +0900
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

# Alias

>~/.gitconfig 파일을 수정하면 컴퓨터 전체의 git에 적용됨 (~/ ⇐ HomeDirectory)

아래 코드를 .gitconfig에 붙여 넣는다. 

```sh
[alias]
lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
lg = !"git lg1 -10"

co = checkout
br = branch
ci = commit
st = status
unstage = reset HEAD --
last = log -1 HEAD
        tlg = log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold red)%h%C(reset) : %C(bold green)(%ar)%C(reset) - %C(cyan)\\<%an\\>%C(reset)%C(bold yellow)%d%C(reset)%n%n%w(90,1,2)%C(white)%B%C(reset)%n'
[user]
        email = qvil1127@gmail.com
        name = tshyeon
```
커맨드 라인에 입력
```
$ git config --global alias.tlg "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold red)%h%C(reset) : %C(bold green)(%ar)%C(reset) - %C(cyan)\<%an\>%C(reset)%C(bold yellow)%d%C(reset)%n%n%w(90,1,2)%C(white)%B%C(reset)%n'"
```
```
git lg 의 -10옵션 10줄 
git lg1 또는 lg2로 log명령을 대신한다.
git co 로 checkout명령을 대신한다.
git br 로 branch명령을 대신한다.
git ci 로 commit명령을 대신한다.
git st 로 status명령을 대신한다.
git unstage 로 reset HEAD –명령을 대신한다.
git last 로 log -1 HEAD명령을 대신한다.
git tlg 네이버(toast meetup)에서 본 log alias
```
