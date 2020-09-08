---
title: "[Git] git 기본 editor VSCode로 사용하기(Feat. MAC OS X)"
date: 2017-07-18
tags: [git, gitconfig, vscode, mac, os x]
comments: true
share: true
---

## 윈도우(Windows)

VSCode가 설치되어 있으면 아래와 같이 명령어를 이용하거나 `~/.gitconfig`파일을 수정하면 기본 에디터가 VSCode로 설정된다.

### 명령어(Command)

```sh
git config --global core.editor "code --wait"
```

### .gitconfig

```
[core]
    editor = code --wait
```

## 맥(OS X)

`~/.gitconfig`파일을 수정하는건 동일하지만 code가 path에 추가되어있지 않은 경우가 있다.

> (macOS Sierra 10.12.5 기준)

### `~/.bash_profile`에 PATH를 추가한다. (PATH를 여러개 추가할 경우 `:`(콜론)으로 구분한다.)

```sh
export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:"
```

### `source ~/.bash_profile`를 실행해서 PATH를 적용한다.

### [윈도우(Windows)](#윈도우)와 같이 설정한다.
