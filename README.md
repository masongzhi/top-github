# top-github

top github 的小程序版（非安卓版原作者）

### v1.0.4

修改 Today 为 last 3 days（Today 的话很少数据），增加选择默认值

### v1.0.3

增加转发按钮

### v1.0.2

后端只做反向代理

### v1.0.0（分支：webapp-node）

增加 node 后端做代理，使用小程序-腾讯云方案

### v1.0.1

header 使用 fixed 定位，增加 popup 组件解决不能跳转外链问题，使用长按 复制内容代替

### v0.0.3（分支：webapp-node）

小程序限制不能跳转外部链接，使用小程序腾讯云方案解决（因为我服务器在 vultr 不能备案，所以使用腾讯云的服务器），最低配置前 3 个月免费，域名 1 年 11 元，总体上也算是傻瓜式部署

* 使用这个方案的缺陷：首先调试 node 端很麻烦，要用到开发者工具的“启动单步调试”，而且每次修改 node 端代码都要上传到腾讯云开发模式服务器

### v0.0.2

增加查询语言选项、完善时间选项、增加加载中状态、增加滚动加载

### v0.0.1

初步搭建小程序，仿造 Top Github

### 目前没解决问题

* 直接访问 api.github.com 显示没备案，需要做后端代理（使用小程序—腾讯云解决方案）
* 小程序限制不能跳转外部链接
* 没实现长按复制 git 项目地址
