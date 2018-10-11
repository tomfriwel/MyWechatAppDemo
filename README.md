# MyWechatAppDemo

如果想要看具体那个页面可以直接在`app.json`里把相应页面路径放到第一个。

### component

* 组件样式不会传递到父级，即组件定义了`class=inner`的`wxss`，父级有同样的`class`并不会造成影响。即 组件对应 `wxss` 文件的样式，只对组件wxml内的节点生效


#### Page:snow

![Snow Screen Shot 2017-12-26 at 10.45.58.png](http://upload-images.jianshu.io/upload_images/2158535-bb2d3cdcbaa723f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)


#### Page:qrcode

> 核心代码来自 https://github.com/davidshimjs/qrcodejs


#### Page:throttle - 函数节流

> 核心代码来自 https://mp.weixin.qq.com/s/3FZJ0nQLhj9PCi0pfBjc9A

#### Page:promise - 简化回调


#### Page:wxApiTest - 转发

获取`openGId`(群对小程序的id)

#### Page:sortItems - 拖拽排序

#### Page:bluetooth - 蓝牙

#### Page:audio - 音乐播放测试

#### Page:canvasImage - 滤镜

[weImageFilters](https://github.com/tomfriwel/weImageFilters)

![](https://camo.githubusercontent.com/a6ff3b7e9df80a4126b6dcee4133631daaa686db/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323135383533352d323035613766313061316634316264612e6a7065673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f333735)


#### Page:calendar - 公农日历

![](https://upload-images.jianshu.io/upload_images/2158535-0d889c9cb18ca1a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/375)

#### Page:color - 拾色器

![](https://upload-images.jianshu.io/upload_images/2158535-36174e426000b9f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/375)