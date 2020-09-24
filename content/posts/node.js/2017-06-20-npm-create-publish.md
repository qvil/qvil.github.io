---
title: "[NPM] NPM 모듈 만들고 배포하기"
date: 2017-06-20
categories: "node.js"
tags: [node.js, npm, publish]

comments: true
share: true
slug: npm-create-publish
---

# NPM 모듈 만들고 배포하기

> 회사에서 사용하는 LTE EARFCN Calculator를 모듈화 해야하고, 어차피 오픈되어있는 알고리즘이므로 공개해서 배포하고 싶어졌다.

## [1. NPM Sign up](https://www.npmjs.com/signup)

### 1.1 Profile 설정(안해도 됨)

![npm-profile-update1](/images/npm-profile-update1.png)

`Update your profile`을 누르고

![npm-profile-update2](/images/npm-profile-update2.png)

`Change your avatar at gravatar.com`을 누르면 wordpress.com연동을 하라고 하는데 예전에 만든 아이디가 있어서 연동시켰음.

![npm-profile-update3](/images/npm-profile-update3.png)

위 화면에서 `Add a new image`누르면 끝

## 2. Github 저장소 생성

![npm-create-repo](/images/npm-create-repo.png)

### 위 옵션은 꼭 안해도 되지만 권장

1. README 파일을 추가하고
1. .gitignore를 Node용으로 추가
1. LICENSE 파일을 추가

## 3. NPM Init

1. Git 저장소 Clone `git clone {https://github.com/qvil/lte-earfcn-calculator.git}`
1. Git 저장소에서 `npm init`
1. 모듈을 만들고 저장소에 푸쉬 & NPM Publish
   1. `git add -A && git ci -m "" && git push origin master`
   1. `npm publish`

> `npm publish`할 때 version이 같으면 publish되지 않는다. `npm version 1.0.2` 이런 식으로 버전을 올려서 publish해주면 됨.

## 참고

- [How to Create and Publish Your First Node.js Module](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738)
