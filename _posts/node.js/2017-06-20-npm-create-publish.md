---
layout: post
title: "[NPM] NPM 모듈 만들고 배포하기"
modified: 2017-06-20
categories: "node.js"
tags: [node.js, npm, publish]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

# NPM 모듈 만들고 배포하기

>회사에서 사용해야 하는 LTE EARFCN Calculator를 모듈화 해야하고, 어차피 오픈되어있는 알고리즘이므로 모듈화해서 배포하고 싶어졌다.

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

### 꼭 이 옵션은 안해도 되지만 권장
1. README 파일을 추가하고
1. .gitignore를 Node용으로 추가
1. LICENSE 파일을 추가

## 3. NPM Init

1. Git 저장소 다운
1. Git 저장소에서 `npm init`
1. 모듈을 만들고 
    1. `git add -A && git ci -m "" && git push origin master`
    1. `npm publish`

>npm


## adsffads
```sh
npm version 0.0.2
```

```sh
npm publish
```


## 참고
- [How to Create and Publish Your First Node.js Module](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738)