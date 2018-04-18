# MyWechatAppDemo

如果想要看具体那个页面可以直接在`app.json`里把相应页面路径放到第一个。

### component

* 组件样式不会传递到父级，即组件定义了`class=inner`的`wxss`，父级有同样的`class`并不会造成影响。即 组件对应 `wxss` 文件的样式，只对组件wxml内的节点生效

### pages

#### snow:

![Snow Screen Shot 2017-12-26 at 10.45.58.png](http://upload-images.jianshu.io/upload_images/2158535-bb2d3cdcbaa723f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)


#### qrcode:

> 核心代码来自 https://github.com/davidshimjs/qrcodejs


#### throttle:函数节流

> 核心代码来自 https://mp.weixin.qq.com/s/3FZJ0nQLhj9PCi0pfBjc9A

#### promise:简化回调


#### wxApiTest:转发

获取`openGId`(群对小程序的id)

#### sortItems:拖拽排序

#### bluetooth:蓝牙

