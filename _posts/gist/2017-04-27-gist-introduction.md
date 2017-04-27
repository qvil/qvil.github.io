---
layout: post
title: "[Gist] Gist란 무엇인가?"
excerpt: "Gist를 이용해서 정보가 구식이 되는 것(outdated)을 방지해보자"
modified: 2017-04-27 11:10:26 +0900
categories: "gist"
tags: [gist,github]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---
* Table of Contents
{:toc}

# Gist란 무엇인가?

>[GithubGist][GithubGist]에서 제공하는건데 저는 아래 목적으로 사용합니다.

- 빈번한 수정이 필요한 글을 내장(embed) 링크로 사용할 때
  - 예) 블로그에 코드를 올렸는데 오타가 있어서 코드도 수정하고 블로그 글도 수정해야 한다.(번거로움) 만약 오타난 코드를 사용한 글이 여러군데라면..?

## 사용법

>[GithubGist][GithubGist]에 들어가면 아래 사진을 볼 수 있습니다.
    
![](/images/gist-1.png)

    Markdown문법으로 문서를 작성하거나 github에 올리듯이 코드를 작성하면 됩니다.

![](/images/gist-link.png)

    작성하신 문서에 원하는 링크를 사용하시면 됩니다.

- Embed : HTML `<script>`태그 형식의 링크를 보여줍니다. 블로그 등 다른 사이트에서 Embed script태그를 지원한다면 문서가 Gist대로 보여집니다. 아래 사진은 제 블로그에 Gist를 적용한 예제입니다.
![](/images/gist-embed.png)
- Share : 문자 그대로 해당 Gist 공유용 링크
- Clone Via
  - HTTPS : HTTPS를 이용한 Gist 저장소 주소를 보여줍니다. 이 주소를 통해 `Clone`해서 git으로 버전관리할 수 있습니다.
  - SSH : SSH를 이용한 Gist 저장소 주소를 보여줍니다. 이 주소를 통해 `Clone`해서 git으로 버전관리할 수 있습니다.

# 문제점

## Embed한 사이트에서 TOC제대로 동작 안하는 문제

![](/images/gist-toc-github.png)

    Github에서는 TOC가 잘 동작.

![](/images/gist-toc-blog.png)

    Embed한 사이트에서는 TOC가 눌러도 동작 안함.

>해당문제는 Gist의 문제라기 보다는 내 블로그와의 TOC 호환성 문제인 것 같다.

<!-- Link -->
[GithubGist]: https://gist.github.com