![封面](http://upload-images.jianshu.io/upload_images/2158535-86dcf2fa7f32b332.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/400)


[**了解什么是 Promise 对象**](http://es6.ruanyifeng.com/#docs/promise)

在项目中，会出现各种异步操作，如果一个异步操作的回调里还有异步操作，就会出现回调金字塔。

### 比如下面这种

```
// 模拟获取code，然后将code传给后台，成功后获取userinfo，再将userinfo传给后台
// 登录
wx.login({
    success: res => {
        let code = res.code
        // 请求
        imitationPost({
            url: '/test/loginWithCode',
            data: {
                code
            },
            success: data => {
                // 获取userInfo
                wx.getUserInfo({
                    success: res => {
                        let userInfo = res.userInfo
                        // 请求
                        imitationPost({
                            url: '/test/saveUserInfo',
                            data: {
                                userInfo
                            },
                            success: data => {
                                console.log(data)
                            },
                            fail: res => {
                                console.log(res)
                            }
                        })
                    },
                    fail: res => {
                        console.log(res)
                    }
                })
            },
            fail: res => {
                console.log(res)
            }
        })
    },
    fail: res => {
        console.log(res)
    }
})
```

### 下面分析如何用Promise来进行简化代码
因为微信小程序异步api都是success和fail的形式，所有有人封装了这样一个方法:

***promisify.js***
```
module.exports = (api) => {
    return (options, ...params) => {
        return new Promise((resolve, reject) => {
            api(Object.assign({}, options, { success: resolve, fail: reject }), ...params);
        });
    }
}
```


先看最简单的:
```
// 获取系统信息
wx.getSystemInfo({
    success: res => {
        // success
        console.log(res)
    },
    fail: res => {

    }
})
```

使用上面的`promisify.js`简化后:
```
const promisify = require('./promisify')
const getSystemInfo = promisify(wx.getSystemInfo)

getSystemInfo().then(res=>{
    // success
    console.log(res)
}).catch(res=>{

})
```

![getSystemInfo](http://upload-images.jianshu.io/upload_images/2158535-31b4f358f598ab99.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/800)


可以看到简化后的回调里少了一个缩进，并且回调函数从9行减少到了6行。

### 回调金字塔的简化效果

那么再来看看最开始的那个回调金字塔
```
const promisify = require('./promisify')
const login = promisify(wx.login)
const getSystemInfo = promisify(wx.getSystemInfo)

// 登录
login().then(res => {
    let code = res.code
    // 请求
    pImitationPost({
        url: '/test/loginWithCode',
        data: {
            code
        },
    }).then(data => {
        // 获取userInfo
        getUserInfo().then(res => {
            let userInfo = res.userInfo
            // 请求
            pImitationPost({
                url: '/test/saveUserInfo',
                data: {
                    userInfo
                },
            }).then(data => {
                console.log(data)
            }).catch(res => {
                console.log(res)
            })
        }).catch(res => {
            console.log(res)
        })
    }).catch(res => {
        console.log(res)
    })
}).catch(res => {
    console.log(res)
})
```

![简化回调](http://upload-images.jianshu.io/upload_images/2158535-a3c61c06daf2dae1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/800)


可以看到简化效果非常明显。

同样适用于网页或者nodejs等中。

### 参考
* [**Promise 对象**](http://es6.ruanyifeng.com/#docs/promise)

### 源代码
* [tomfriwel/MyWechatAppDemo](https://github.com/tomfriwel/MyWechatAppDemo) 的`promisePage`页面