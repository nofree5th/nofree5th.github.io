---
layout: blog
title: 本站的起源
category: blog.default
---

##搭建Jekyll环境
- 安装ruby

  [ruby 1.9.3](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-1.9.3-p545.exe?direct),ruby 1.9.2/2.0.0都有一堆坑:)

- 安装DevKit

  [DevKit 4.5.2](https://github.com/downloads/oneclick/rubyinstaller/DevKit-tdm-32-4.5.2-20111229-1559-sfx.exe)

  请确保bash的LC_ALL不是zh-CN.UTF-8(直接win+R，打开一个cmd，在里面安装)。
  我之前在git bash中安装，配置了LC_ALL的环境变量，导致安装DevKit总是出错**registry.rb:173:in `tr`: invalid byte sequence in UTF-8(ArgumentError)**

- 安装jekyll

  gem源可考虑配置为: http://ruby.taobao.org/
  >`gem install jekyll`

- 安装markdown渲染引擎

  可以选择rdiscount或redcarpet或其他
  >`gem install rdiscount`

- 配置环境

  git安装请自行百度, 启动git bash，编辑**~/.bashrc**文件，增加：
  > export LANG=zh_CN.UTF-8

  > export LC_ALL=zh_CN.UTF-8

----------
##Jekyll使用简单说明
- 选择你喜欢的blog风格(这里有一个[Jekyll Sites](https://github.com/jekyll/jekyll/wiki/Sites)列表可供参考或者自己定制，然后git clone到本地

- 启动[Jekyll本地服务](http://localhost:4000/)(用于调试、预览)，执行命令时请切换到你的git repo根目录

  加**&**切换到后台，后续你的内容有修改，就不需要再开一个git bash，可以直接jekyll build，刷新页面即可
  > $ `jekyll serve&`

- Markdown

  在线编辑器[stackedit](https://stackedit.io)或者直接gvim中编写。
  [Markdown语法入门](http://joinwee.com/lesson/10/)。

- 编辑完执行`jekyll build`命令，没有问题再`git commit/git push`推送到github服务器



##遇到的问题们
- octopress 安装失败

  最开始准备用Octopress生成一些基本样式，顺便学学Jekyll语法，不过总是在***gem install***时失败(discount安装失败)。
  
  经过一番百度，国内的解决方案无一能解决这个问题，最后翻到[stackoverflow](http://www.stackoverflow.com)，终于在一个小角落看到了提示： 把ruby从1.9.2升级到1.9.3，问题解决后，已经对octopress失去了兴趣，算是还没开始便已结束。
  
  被octopress伤透心后，决定直接使用原始的jekyll，就是你现在看到的样子。
  
  对octopress有兴趣的同学，可参考[该文](http://blog.163.com/fuhaocn@126/blog/static/366650802012115103842500/)。

- Jekyll build生成空文件

  原因1：可能是编码不对，不过网上的解决方案很多都是hack jekyll的源码，事实上高版本的jekyll(我的是1.5.1)支持配置编码，只要在你源码的根目录的***_config.yml***里面配置编码即可：
  
  > encoding: utf-8
  
  在修复原因1中的问题时，你可能又会遇到一个坑爹的问题——***Unsupported character utf8***。原因就是utf-8中的***-***必不可少，之前由于用mysql的set names utf8习惯了，一不小心少了个***-***导致出现***Unsupported character utf8***，稍微不细心就会莫名其妙，utf8还不支持!? 嗯，换成utf-8即可——这大概算是一个命名规范不统一引起的血案吧，有的是utf8，有的是utf-8，有的两者皆可，两者皆可的无节操者算是立了一功。本来很简单的问题，也变得复杂起来了。
  
  原因2：jekyll build的目录不对，这个相当坑爹，可能你cd到_post里面去了，当然踩一次坑就能长点记性。话说回来，jekyll也该给个warning不是？

##感谢
- git/[github](https://www.github.com)
- [github pages](https://pages.github.com)
- [github Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)
- [jekyll](http://jekyllrb.com/docs/quickstart/)
- [liquid](http://docs.shopify.com/themes/liquid-basics/output)
- [bootstrap](http://www.bootcss.com)
- [在线favicon图标生成工具](http://www.atool.org/ico.php)
- 本站还参考了诸多站点，如： [BeiYuu](http://beiyuu.com/)，[TeddyWu](http://teddywu.info/)
- 还有很多，windows/gvim/chrome等等

