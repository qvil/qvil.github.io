---
layout: post
title:  "[Blog] 블로그 회고록"
excerpt: "Feat. Jekyll, Hexo, Hugo, Wordpress, Blogger..."
created:   2017-04-06 11:13:00 +0900
date:   2017-04-27 14:39:00 +0900
categories: jekyll blog
tags: blog jekyll
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

* Table of Contents
{:toc}

# 요약(정리되지 않음)
TIL을 공유하고 싶다 -> 프레임워크로 블로그를 만들자 -> 흥미로운 테마를 적용하면서 재미를 느낌(시간 많이 소모됨) -> 테마 적용하면서 각종 에러 디버깅(시간 제일 많이 소모) -> 내가 이러려고 블로그했나 자괴감 -> 맨 처음 봤던 Jekyll에 Default 테마로 정착 -> [Github Wiki](https://github.com/qvil/TIL/wiki)(wow) ->  Wordpress(서비스형)궁금해서 써봄 -> 검색이랑 태그기능은 꼭 있었으면 하는데([Jekyll So Simple Theme](https://github.com/mmistakes/so-simple-theme)) ->  ...ing


# 블로그 해보려고 시행착오를 겪으며 느끼고 배운점

# 목적

기존 [TIL](https://github.com/qvil/til)을 VSCode로 작성하고 git으로 푸쉬하고 찾아볼때는 Github으로 찾아봤다.

TIL을 공유하고싶다. 특히 구글검색에 노출되도록(개발자는 대부분 구글 검색을 사용한다.)

구글검색? [SEO](https://ko.wikipedia.org/wiki/검색_엔진_최적화)를 고려해야되니까 일단 **네이버는 제외.**(아래 사진을 보면 robots.txt 때문에 구글에서 검색하지 못함.) ![google-search-joonggonara](/images/google-search-joonggonara.png)
블로그를 처음부터 만들면 좋겠지만 너무 귀찮고 힘드네? 위에 언급한 SEO도 알아서 해주는거 없나?

있네 정적페이지 생성기(Static Site Generator)라는게 있다네?

[StaticGen](https://www.staticgen.com)에서 가장 유명한 정적페이지 생성 프레임워크 비교(Jekyll, Hexo, Hugo)
[블로그 프레임워크 비교, 왜 지킬인가?(feat. Jekyll, Hexo, Hugo)](/jekyll/2017/04/06/why-jekyll.html)

## 구글검색

- <del>[Google 블로그 검색](http://blogsearch.google.co.kr/ping)에 사이트를 추가했는데 구글에서 검색이 될지 모르겠다.</del>
- Jekyll로 Github페이지에 호스팅하니까 일정시간(잘 모름) 지나니까 구글에서 [사이트검색](https://www.google.co.kr/search?client=safari&rls=en&q=site:qvil.github.io&ie=UTF-8&oe=UTF-8&gfe_rd=cr&ei=DIcBWcXsCOT98wfow5LYDg)(site:qvil.github.io)된다.

<figure class="half">
    <a href="/images/google-blog-search.png">
	    <img src="/images/google-blog-search.png" alt="image">
    </a>
    <a href="/images/google-site-search.png">
	    <img src="/images/google-site-search.png" alt="image">
    </a>
	<figcaption>Google 검색</figcaption>
</figure>

# 과정

## 흥미로운 테마(시간 많이 소모됨)

### [Jekyll Themes](http://jekyllthemes.org)

* [Clean Blog](http://jekyllthemes.org/themes/clean-blog/) 사용해본 블로그 프레임워크에서 다 있었다. 사람들도 많이 사용하고 이름 그대로 깔끔하다.
* [So Simple](http://jekyllthemes.org/themes/so-simple/) 이름 그대로 심플하고 검색지원(중요)해서 쓰려다가 뭔가 기능이 복잡한것 같고 오래된 느낌의 디자인이라 적용해서 이틀 사용하고 접음.
* Material Design Theme(추천하는건 아닌데 개인적으로 Material Design 좋아해서...)
    * [jekyll-theme-materialize](https://github.com/KeJunMao/jekyll-theme-materialize)
    ![jekyll-theme-materialize](/images/jekyll-theme-materialize.png)
    개인적으로 가장 마음에 들었던 Material 테마. 디자인과 검색기능도 좋았는데 코드하이라이팅이 안돼서 이슈를 등록했는데 이게 내 깃헙의 첫 이슈 Report가 되었다.
    
    ![my-first-issue](/images/my-first-issue.png)![issue-report](/images/issue-report.png)
    * [Jekyll Material Design Lite](http://jekyllthemes.org/themes/jekyll-mdl/) 내가 좋아하는 Material Design이 적용되어 있다. 지킬테마에 있는 Material 테마는 대부분 적용해본 것 같다.
    * [HCZ Material](http://jekyllthemes.org/themes/hcz-jekyll-material/) Material 테마를 찾다보니 중국인을 많이 접하게 되고 config파일 중국어를 한국어로 변환하는 시간도 많이 걸리겠다고 생각하게 됨.

이 외에도 많은 테마를 적용해보면서 여러 에러(대부분 bundle에러였으나 가끔 알 수 없는 에러)를 접하게 되고 글을 써야하는데 이런거 디버깅하는데 시간이 많이 소모되면 안된다고 생각함. ([이 블로그](http://vjinn.github.io/environment/enjoy-jekylling/#글쓰기에만-전념)에서 영향을 많이 받음.)

### Hexo Themes
 * [Hexo Material](https://material.viosey.com/en/) 페이지에 문서화도 잘 되어있고 다국어지원(i18n)인데 한국어가 없길래 오픈소스에 기여할 수 있는 좋은 기회라 생각했으나 Hexo를 사용하지 않아서 사용안함.

## 테마 적용하면서 각종 에러 디버깅(시간 제일 많이 소모)

### Hexo Version Control이 안돼??

아래 사진을 보면 나랑 같은 문제점을 [Hexo 공식 Github에 이슈](https://github.com/hexojs/hexo/issues/1701)로 등록하였고 Hexo 멤버가 공식적으로 markdown files version control은 지원하지 않는다고 밝혔다. 다른 브랜치를 사용해서 버전관리 하라고 해서 시도해봤는데 더 불편하다. 이러면 내가 왜 Hexo를 쓰지??라는 의문을 가지게 됨.

![hexo-version-control](/images/hexo-version-control.png)

### [Hugo](https://gohugo.io)는 또 뭐야?(지쳐감)

테마적용과 디버깅 반복에 지쳐갈 때쯤 Go언어를 사용한 Hugo가 있다네 사람들도 많이 쓴다길래 Init해보고... 접음.

## 내가 이러려고 블로그했나 자괴감

몇일동안 블로그 프레임워크 탐색과 적용, 테마 검색에 시간을 다 보내느라 그동안 공부하고 쌓인 데이터들을 TIL에 한글자도 못적는 역설적인 상황이 발생함.

# 결론

- Github Page에서 정식으로 Jekyll도 지원하니 나도 그렇게 사용하자.
- 예쁜 테마보다는 글에 집중하자.
- 필요한 기능(댓글, 검색 등)이 있다면 플러그인을 사용하거나 직접 구현하자.
- Wordpress [설치형(.org)](https://wordpress.org) 말고 [서비스형(.com)](https://wordpress.com) 써봤는데 나쁘지 않은 것 같다.
    - 쓰기 쉬워서 글에만 집중할 수 있다.
    - 더 깊게 보진 않았지만 **내가 써본 테마는 코드블럭이 지원이 안돼서** <del>귀찮아서 방치</del>
