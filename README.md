# 使用react、router、redux + umi框架 开发的中大型电商移动端网站

- 该项目完成了电商的基本流程

- 注册 -> 登录 -> 选购商品 -> 查看商品 -> 加入购物车 -> 提交订单 -> 地址选择 -> 确认支付 -> 查看订单

- 技术栈
    - react + react-router + redux + umi + saga + dva + ES6/7 + axios + less + flex
- 核心技术
    - 核心技术为 react, react-router, redux
    - 并且使用了umi框架作为支撑，大大简化了router配置及redux的书写
    - 使用了dva作为数据流解决方案
    - 中间件使用了react-saga处理redux应用异步请求
## 功能亮点

- 受保护的页面

- 离开警示

- 页面后退逻辑的优化处理

- 嵌套路由

- 阻止跳转

## 说明

> 由于后端并没有提供相对于的数据接口，
> 此项目只完成电商网站的基本流程
> 后端并没有处理重定向，而我使用的是**history**模式，刷新意味着404(放过我吧)
> 日后后端完善后，再书写其他，比如评价、积分折扣。

## 效果演示
- 请用chrome手机模式预览 [预览项目请点我](http://zaima.cool:5501)
> 服务器不太友好，第一次加载有点慢，请耐心等待

## 页面地址路径
- /                 首页
- /getIntoBuy       入园采购
- /vogueFruit       时令水果
- /shoppingCart     购物车
- /mine             我的
- /addressManage    地址管理
- /details          详细地址
- /enroll           注册
- /integralMall      积分商城
- /login            登录
- /memberCode       会员码
- /memberInterest   会员权益
- /mine             我的
- /myBoon           我的优惠卷
- /myIntegral       我的积分
- /myOrder          我的订单
- /myRedPacket      我的红包
- /orderAccomplish  订单完成
- /orderDetails     订单详情
- /pay              支付界面
- /personalData     个人资料
- /recharge         充值
- /selectCity       选择城市
- /shopDetail       商品详情
- /shoppingCart     购物车
- /submitOrder      提交订单





