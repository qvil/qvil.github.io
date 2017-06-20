---
layout: post
title: "[Jekyll] Gemfile 버전 에러"
modified: 2017-06-20
categories: "blog"
tags: [jekyll, blog, gemfile, ruby]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 에러
```sh
WARN: Unresolved specs during Gem::Specification.reset:
      jekyll-watch (~> 1.1)
      rouge (~> 1.7)
WARN: Clearing out unresolved specs.
Please report a bug if this causes problems.
/Library/Ruby/Gems/2.0.0/gems/bundler-1.14.6/lib/bundler/runtime.rb:40:in `block in setup': You have already activ
ated addressable 2.5.1, but your Gemfile requires addressable 2.4.0. Prepending `bundle exec` to your command may
solve this. (Gem::LoadError)
        from /Library/Ruby/Gems/2.0.0/gems/bundler-1.14.6/lib/bundler/runtime.rb:25:in `map'
        from /Library/Ruby/Gems/2.0.0/gems/bundler-1.14.6/lib/bundler/runtime.rb:25:in `setup'
        from /Library/Ruby/Gems/2.0.0/gems/bundler-1.14.6/lib/bundler.rb:100:in `setup'
        from /Library/Ruby/Gems/2.0.0/gems/jekyll-3.4.3/lib/jekyll/plugin_manager.rb:36:in `require_from_bundler'
        from /Library/Ruby/Gems/2.0.0/gems/jekyll-3.4.3/exe/jekyll:9:in `<top (required)>'
        from /usr/bin/jekyll:22:in `load'
        from /usr/bin/jekyll:22:in `<main>'
```
## 해결
1. Gemfile.lock 삭제
2. `bundle install`

## 참고
[Sanghun Kang님 블로그](http://sanghun.xyz/jekyll-error/)
>같은 테마가 적용되어있는 블로그인데 HPSTR 테마를 적용하면서 겪은 에러라서 내용도 거의 동일하다. [Michael Rose의 So Simple 테마](https://mademistakes.com/work/so-simple-jekyll-theme/)부터 이용했는데 그때도 같은 `addressable 2.4.0.` 에러가 있었지만 정리해놓지 않아서 다시 찾아보게 되었다.
