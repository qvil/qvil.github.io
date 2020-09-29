---
title: "[Linux] Yarn Install(Feat. E: Unable to locate package yarn)"
date: 2017-07-31 09:16:13 +0900
categories: "linux"
tags: [linux, yarn, install]

comments: true
share: true
slug: linux/yarn-install
---

공식사이트 문서 [Yarn Installation](https://yarnpkg.com/lang/en/docs/install/)를 보고 따라하면 대부분의 경우 Install하는데 문제가 없지만

## Linux에서 Install 중 Error 발생하는 경우

아래와 같은 에러가 발생 할 수 있다. 혹은 다른 에러도 발생할 수 있음.

```sh
E: Unable to locate package yarn
```

cmdtest 에러가 뜨는 경우가 있는데 우분투 17.04이상에서 자동으로 설치된 cmdtest가 yarn을 다른 yarn으로 인식해서 발생하는 오류. 아래 명령어로 cmdtest를 삭제하고 설치해준다.

```sh
sudo apt remove cmdtest
```

에러를 해결해도 설치가 안되는 경우가 있다 yarn자체를 찾지 못한다. yarnpkg가 필요 하다.

### 1. `yarnpkg`를 global로 설치.

npm을 사용할 것이므로 [node.js][node.js]가 설치되어 있어야 합니다.

> Prerequisite: [node.js][node.js]

```sh
sudo npm install -g yarnpkg
```

### 2. curl로 패키지에 `yarn`을 추가.

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

### 3. Update & Install

```sh
sudo apt-get update && sudo apt-get install yarn
```

### 4. Version Check

```sh
yarn --version
```

[node.js]: https://nodejs.org
