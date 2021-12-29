---
title: vuepress搭建
date: 2021-12-02
---

## 1、环境准备
安装git、node、yarn、vscode   

[git官网：https://git-scm.com/](https://git-scm.com/)   
![](../.vuepress/public/text/git-down.png)   
下载太慢，可如图右键复制连接，用迅雷下载   
![](../.vuepress/public/text/git-down2.png)   

[git官网：https://nodejs.org/en/](https://nodejs.org/en/)   
[vscode官网：https://code.visualstudio.com/](https://code.visualstudio.com/)   

- 创建本地ssh公钥，实现免密码登录   
``` sh
#查看C盘用户下有无.ssh文件，没有就是没生成过，
#生成步骤，在cmd
ssh-keygen -t rsa -C "邮箱"
(/Users/your_user_directory/.ssh/id_rsa):    #按回车键
Enter passphrase  (empty for no passphrase):    #输入密码
Enter same passphrase again:    #再次输入密码
#找到用户ssh文件夹下的id_rsa.pub文件，复制key到github的头像->setting->新建SSH key

ssh -T git@github.com
```

## 2、快速上手
[参考：https://vuepress.vuejs.org/zh/guide/getting-started.html](https://vuepress.vuejs.org/zh/guide/getting-started.html)   
- 安装vuepress：npm install -g vuepress

- 从github新建仓库，拉取项目： git clone HTTPS地址   
  手动创建README.md，用vuepress dev .可运行此文件（.代表当前目录）   
  
- 生成package文件： npm init -y

- 然后配置本地服务script脚本   
``` sh
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
  "deploy": "vuepress build docs && start deploy.bat"
},
```
- 创建docs文件夹（docs是vuepress根路径，README.md是入口文件）   
  也可使用以下命令   
``` sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

## 3、使用默认主题
[参照：https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)   


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