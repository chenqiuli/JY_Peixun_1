## 前端-react 和 ant design 入门

### 一、React 介绍

#### 1、React 的特性与发展

- （1）React 起源与发展：2013 年 5 月起源于 Facebook，用于创建用户界面的 JavaScript 库。

- （2）React 的特性

  - 高效：React 通过对虚拟 dom，减少与 Dom 的交互
  - JSX：JavaScript 语法的扩展，使用 JSX 语法在 render 中创建 dom，提高代码可读性
  - 组件化：通过 React 构建组件，使代码更容易得到复用
  - 单向数据流：数据流向只能从父组件流向子组件，子组件通过回调函数将数据传递回父组件

- （3）虚拟 dom：
  - <font color="red">画图</font>

### 二、React 基础

#### 1、如何创建第一个 react 项目

- （1）全局安装
  ```bash
  npm i -g create-react-app
  create-react-app myproject
  ```
  - PS：如遇全局安装失败，执行`npm prefix -g`检测 npm 的 node_modules 的 bin 目录，将其 bin 路径添加至系统环境电脑 path 中即可。
- （2）临时安装
  ```bash
  npx create-react-app myproject
  ```
    - PS：`npx`可以避免全局模块安装，而直接执行 npm 的 node_modules 的 bin 目录下的命令
- （2）JSX 语法
- （3）组件样式
- （4）数据绑定
- （5）条件渲染
- （6）列表渲染
- （7）事件绑定
- （8）使用 hooks
- （9）表单受控

### 三、实践演练一

- TodoList 练习，涉及到第二点所有知识，源代码如下：
-

### 四、React 进阶

- （1）组件化开发
- （2）组件通信方式
- （3）组件路由

### 五、实践演练二

- TodoList 案例列表页跳转详情页带参数，组件复用 demo

### 六、Antd Design & ProComponent
- （1）介绍文档
- （2）介绍常用的蚂蚁组件，代码演示
- （3）如何修改蚂蚁的样式，特殊的有Modal，Drawer
- Antd Design与Procomponent

### 七、总结

### 八、答疑
