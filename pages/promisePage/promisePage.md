[**Promise 对象**](http://es6.ruanyifeng.com/#docs/promise)

在项目中，会出现各种异步操作，如果一个异步操作的回调里还有异步操作，就会出现回调金字塔。

#### 比如下面这种

```
wx.login({
    success: res => {
        // success
        let code = res.code
        imitationPost({
            url: '/test/loginWithCode',
            data: {
                code
            },
            success: data => {
                wx.getUserInfo({
                    success: res => {
                        // success
                        let userInfo = res.userInfo

                        imitationPost({
                            url: '/test/saveUserInfo',
                            data: {
                                userInfo
                            },
                            success: data => {
                                //...
                            },
                            fail: res => {

                            }
                        })
                    },
                    fail: res => {
                        // fail
                    }
                })
            },
            fail: res => {
                console.log(res)
            }
        })
    },
    fail: res => {
        // fail
    }
})
```

#### 下面分析如何用Promise来进行简化代码
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

可以看到简化后的回调里少了一个缩进，并且回调函数从9行减少到了6行。

那么再来看看最开始的那个回调金字塔
```
const promisify = require('./promisify')
const login = promisify(wx.login)
const getSystemInfo = promisify(wx.getSystemInfo)

login().then(res=>{
        // success
        let code = res.code
        imitationPost({
            url: '/test/loginWithCode',
            data: {
                code
            },
            success: data => {
                wx.getUserInfo({
                    success: res => {
                        // success
                        let userInfo = res.userInfo

                        imitationPost({
                            url: '/test/saveUserInfo',
                            data: {
                                userInfo
                            },
                            success: data => {
                                //...
                            },
                            fail: res => {

                            }
                        })
                    },
                    fail: res => {
                        // fail
                    }
                })
            },
            fail: res => {
                console.log(res)
            }
        })
    })

wx.login({
    success: res => {
        // success
        let code = res.code
        imitationPost({
            url: '/test/loginWithCode',
            data: {
                code
            },
            success: data => {
                wx.getUserInfo({
                    success: res => {
                        // success
                        let userInfo = res.userInfo

                        imitationPost({
                            url: '/test/saveUserInfo',
                            data: {
                                userInfo
                            },
                            success: data => {
                                //...
                            },
                            fail: res => {

                            }
                        })
                    },
                    fail: res => {
                        // fail
                    }
                })
            },
            fail: res => {
                console.log(res)
            }
        })
    },
    fail: res => {
        // fail
    }
})
```


