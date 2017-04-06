---
layout: post
title:  "Drafts 초안 테스트!"
categories: jekyll drafts
---

>Drafts `Test` **안녕하세요**

* Table of Contents
{:toc}

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

### Body text

Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

![Smithsonian Image]({{ site.url }}/images/3953273590_704e3899d5_m.jpg)
{: .pull-right}

*This is emphasized*. Donec faucibus. Nunc iaculis suscipit dui. 53 = 125. Water is H<sub>2</sub>O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. The New York Times <cite>(That’s a citation)</cite>. <u>Underline</u>. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

HTML and <abbr title="cascading stylesheets">CSS<abbr> are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.

### Blockquotes

> Lorem ipsum dolor sit amet, test link adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.

## List Types

### Ordered Lists

1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two

### Unordered Lists

* Item one
* Item two
* Item three

## Tables

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3   |
{: .table}

## Code Snippets

Syntax highlighting via Rouge

```css
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
```

Non Rouge code example

    <div id="awesome">
        <p>This is great isn't it?</p>
    </div>

## Buttons

Make any link standout more when applying the `.btn` class.

<div markdown="0"><a href="#" class="btn">This is a button</a></div>


## Scaffolding

How So Simple is organized and what the various files are. All posts, layouts, includes, stylesheets, assets, and whatever else is grouped nicely under the root folder. The compiled Jekyll site outputs to `_site/`.

```bash
so-simple-theme/
├── _includes/
|    ├── browser-upgrade.html    # prompt to install a modern browser for < IE9
|    ├── disqus-comments.html    # Disqus comments script
|    ├── feed-footer.html        # post footers in feed
|    ├── footer.html             # site footer
|    ├── head.html               # site head
|    ├── navigation.html         # site top navigation
|    ├── open-graph.html         # meta data for Open Graph and Twitter cards
|    └── scripts.html            # site scripts
├── _layouts/
|    ├── page.html               # single column page layout
|    └── post.html               # main content with sidebar for author/post details
├── _posts/                      # MarkDown formatted posts
├── _sass/                       # Sass stylesheets
├── about/                       # sample about page
├── articles/                    # sample articles category page
├── assets/
|    ├── css/                    # compiled stylesheets
|    ├── fonts/                  # webfonts
|    └── js/
|        ├── _main.js            # main JavaScript file, plugin settings, etc
|        ├── plugins/            # scripts and jQuery plugins to combine with _main.js
|        ├── scripts.min.js      # concatenated and minified _main.js + plugin scripts
|        └── vendor/             # vendor scripts to leave alone and load as is
├── blog/                        # sample blog category page
├── images/                      # images for posts and pages
├── 404.md                       # 404 page
├── feed.xml                     # Atom feed template
├── index.md                     # sample homepage. lists 5 latest posts 
└── theme-setup/                 # theme setup page. safe to remove
```

---

```liquid
{% raw %}
{% for post in site.categories.blog %}
{% endraw %}
```


## Jekyll search

This is a very basic attempt at [indexing a Jekyll site](https://github.com/mathaywarduk/jekyll-search) and returning search results with JSON --- Google quality results this is not.

To exclude posts/pages from search results add `search_omit: true` to their YAML Front Matter.

---