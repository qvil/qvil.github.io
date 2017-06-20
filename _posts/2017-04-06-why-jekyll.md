---
layout: post
title:  "[Jekyll] 블로그 프레임워크 비교, 왜 지킬인가? (Feat. Jekyll, Hexo, Hugo)"
created: 2017-04-06 13:33:43 +0900
date:   2017-04-07 13:33:43 +0900
categories: blog
tags: blog jekyll
---

>[Github Page](https://pages.github.com)에 Git History충돌 없이 포스트 버전관리까지 하고싶으면 [Jekyll](https://jekyllrb-ko.github.io)

* Table of Contents
{:toc}

## 블로그 프레임워크

### What

>마크다운 문법을 지원하면서, 자동으로 정적파일(HTML, CSS, JS 등) 생성

### Why

>포스팅을 html로 하기에는 불편해서


## 블로그 프레임워크 비교

### [Hexo](http://hexo.io)

* 장점 : Javascript기반에 기본 테마도 예쁘고 사용하는 사람도 많다.
* 단점 : **Git으로 포스트 버전관리가 안된다.** (이 부분이 너무 치명적이여서 사용하지 않았다.)

### [Hugo](https://gohugo.io)

Go 기반으로 만들어졌으며 빠르다. 는데 흥미를 못느껴서 init만 해보고 접음.

### [Jekyll](https://jekyllrb-ko.github.io)

* 장점 :
    * 가장 많은 사용자 보유
    * **[Github페이지에서 Jekyll사용](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)** [Hexo](#1-hexo)의 단점을 상쇄시키는 장점.
>빌드된 정적페이지를 업로드하는 방식이 아니라 포스트를 올리면 **Github Page에서 Jekyll로 빌드**를 함.
* 단점 : Ruby기반으로 속도가 느리다.
>Ruby기반이라는게 사람마다 장점이 될수도 단점이 될수도 있을것 같다.(개인적으로 테마 적용할 때, Bundle 충돌나면 힘들었음.)

## 결론(Github페이지와 Jekyll은 궁합이 잘 맞습니다.)

한동안 블로그 프레임워크를 찾아보면서 구글의 [Blogger](https://www.blogger.com/)까지  사용해보면서 내가 왜 블로그를 하려고 하는가에 대한 자괴감도 맛보았다. 자신에게 가장 잘 맞는 도구를 사용하는 것이 좋다고 결론내렸다.
