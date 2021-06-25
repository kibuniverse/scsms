# 二手车销售管理系统 scsms

> fe仓库： https://github.com/kibuniverse/scsms
>
> be仓库： https://github.com/hyb-store/scsms-be


## 🎯开发进度 已完成✔

## 开发人员
- 李岳耿 https://github.com/ohana-lyg
- 严凯治 https://github.com/kibuniverse
- 任文涛 https://github.com/wt032320
- 马集笃 https://github.com/gegenixingxinghao

## 项目技术栈
`打包工具`: vite

`语言`: typescript

`框架`: vue3

## 开发规范
### 分支规范
- 开发分支需以dev-开头 具体格式为dev-feature
- 所有变量满足驼峰式命名
- 代码合并需至少一人进行code review

项目开发
```bash
npm run dev | yarn dev | vite | npx vite
```

项目打包
```bash
npm run build | yarn build 
```

## 项目中暴露的问题

### 框架搭建
 - 在最开始没有考虑到开发实际问题，使用了 vue3 + typescript，在实际开发中发现兼容性不是很好，写的也比较难受
 - 对于基本的组件选择了 element-plus，也是由于时间不够，没有调研更多的 ui 框架，例如 naive-ui
 - 开发过程中分支名命情况不是很好
 - 代码规范由于配置的 lint 不是很完善，在 commit 的时候也没有配置语法检查，导致了无法自动格式化，格式化主要靠手动调整，由于每个人代码风格不太一样导致了整体代码一致性不高

### 接口定义
 - 接口定义过于粗略，导致取回的数据类型无法动态生成
 - get，post请求封装没有考虑到动态传入泛型返回类型，需手动将类型用 Promise 包裹显式的作为函数的返回结果


