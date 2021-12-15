---
title: vuepress搭建
---

## 9、使用pwa更新提示
安装pwa插件   
yarn add -D @vuepress/plugin-pwa

config.js中引入插件   
在VuePress中完全地兼容 PWA 的例子（导入icons，manifest.json）   
head中配置   
注意：不生效，要本地安装vuepress，yarn add -D vuepress
用GitHub Pages访问，再打包发布后，刷新即可看到


## 10、使用vssue评论
安装vuepress插件   
yarn add @vssue/vuepress-plugin-vssue   
yarn add @vssue/api-github-v4

config配置插件

创建app   
vssue官网->指南->开始使用->点击（创建 OAuth App）   
->点击（创建 GitHub OAuth App）->点击（前往 Settings - Developer Settings - OAuth Apps）   
[地址：https://github.com/settings/developers](https://github.com/settings/developers)   
新建app，填GitHub Pages地址   
然后将生成Client ID和新生成Client secrets复制到config插件配置中

使用   
单页面使用：只需Vssue标签