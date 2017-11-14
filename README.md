# MyWechatAppDemo

如果想要看具体那个页面可以直接在`app.json`里把相应页面路径放到第一个。

### component

* 组件样式不会传递到父级，即组件定义了`class=inner`的`wxss`，父级有同样的`class`并不会造成影响。即 组件对应 `wxss` 文件的样式，只对组件wxml内的节点生效