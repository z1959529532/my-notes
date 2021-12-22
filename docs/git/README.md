---
title: git笔记
date: 2019-12-10
tags:
 - git
---

## 介绍
git，是一个分布式版本控制软件，没有中央服务器，每个人的电脑都是一个完整的版本库

## 安装
[git官网：https://git-scm.com/](https://git-scm.com/)   
![](/text/git-down.png)   
官网下载太慢，可以使用淘宝镜像下载：[http://npm.taobao.org/mirrors/git-for-windows](http://npm.taobao.org/mirrors/git-for-windows)      
右键菜单有 Git Bush 即安装成功

## Linux基本命令
如下：   
```bash
1) cd 文件名-->改变目录
2) cd ..-->回退上一层目录
3) pwd-->显示当前目录路径
4) ls-->列出当前目录中的所有文件
5) mkdir 文件夹名-->新建一个文件夹
6) rm -r 文件夹名-->删除文件夹
7) touch 文件名-->新建文件
8) rm 文件名-->删除文件
9) mv 文件名 路径-->移动文件
10) reset-->初始化终端/清屏
11) clear-->清屏
12) history-->查看命令历史
```

## 配置
如下：

``` sh
查看配置：
git config -l
系统：git config --system --list
本地：git config --global --list
这些配置实质都在本地配置文件中
系统的在：安装目录\etc\gitconfig
本地的在：C盘\用户\Administrator\.gitconfig
```

安装git要设置用户名和邮箱，以便之后能提交项目

```sh
git config --global user.name "zhangyusheng"
git config --global user.email "z1959529532@163.com"
```

## 理论（核心）
如下：   
![](/text/git-work.png)  


