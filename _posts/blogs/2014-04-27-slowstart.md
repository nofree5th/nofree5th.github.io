---
layout: blog
title: 本站的起源
category: blog.default
---

##Windows搭建Jekyll环境

 1. 安装git
 2. 安装[ruby 1.93](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-1.9.3-p545.exe?direct), 在1.92版本下安装octopress会遇到一堆坑，2.00版本又和jekyll不搭调。
 3. 安装jekyll

    gem install jekyll

 4. jekyll中的markdown引擎选择rdiscount

    gem install rdiscount


----------


##Markdown
首先本文是通过Markdown语法写的，通过在线编辑器[stackedit](https://stackedit.io)编写。试用后感觉还挺好。再附送一个传送门：[Markdown语法入门](http://joinwee.com/lesson/10/)。


##Github + Jekyll
其次，本文内容是托管在[github](https://pages.github.com)的，有兴趣的同学可百度，关键词： Github Jekyll 博客 Octopress。或者你比较懒：

- [github Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html), github Pages和个人主页的区别是，建立一个username.github.io的repo，直接放master分支即可，可参考[github的英文指南](https://pages.github.com)

- [Jekyll官网](http://jekyllrb.com/docs/quickstart/)，学学Jekyll的是如何从模板生成静态html页面的，Octopress或[jekyllbootstrap](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)之类的应该是在此基础上做了一点封装。总的来说，我觉得还是原味的好，当然后者可以用来学习参考。

##总结一下遇到的部分问题
###Octopress 安装失败
最开始我准备用Octopress生成一些基本样式，顺便学学Jekyll语法，不过总是在***gem install***时失败(discount安装失败)。经过一番百度，国内的解决方案无一解决这个问题，最好翻到stackoverflow，终于在一个小角落看到了提示： 把ruby从1.92升级到[1.93](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-1.9.3-p545.exe?direct)即可(如果升级到2.00又会有各种坑，如yajl 不兼容的问题），终于顺利完成。不过已经对它没兴趣了，因为我找到了其他的模板可供参考。

如果有兴趣的同学，可参考[该文](http://blog.163.com/fuhaocn@126/blog/static/366650802012115103842500/)搭建。

###Jekyll build生成空文件
的确就是编码不对，不过网上的解决方案很多都是hack jekyll的源码，事实上高版本的jekyll(我的是1.5.1)支持配置编码，只要在你源码的根目录的***_config.yml***里面配置编码即可：

    encoding: utf-8

其中value为utf-8中的***-***必不可少，之前由于用mysql的set names utf8习惯了，一不小心少了个***-***导致出现***Unsupported character utf8***，稍微不细心就会莫名其妙，utf8还不支持!? 嗯，换成utf-8即可——这大概算是一个命名规范不统一引起的血案吧，有的是utf8，有的是utf-8，有的两者皆可，两者皆可的无节操者算是立了一功。本来很简单的问题，也变得复杂起来了。

##感谢
 1. git/[github](https://www.github.com)
 2. [jekyll](http://jekyllrb.com/docs/quickstart/)/[liquid](http://docs.shopify.com/themes/liquid-basics/output)
 3. [bootstrap](http://www.bootcss.com)
 4. [在线favicon图标生成工具](http://www.atool.org/ico.php)
 5. 本站还参考了诸多站点，如： [BeiYuu](http://beiyuu.com/)，[TeddyWu](http://teddywu.info/)
 6. 还有很多，gvim/chrome等等
