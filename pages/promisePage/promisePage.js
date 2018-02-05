// pages/promisePage/promisePage.js

const promisify = require('../../utils/promisify.js')
const imitationPost = function (options) {
    let success = options.success,
        fail = options.fail,
        url = options.url,
        data = options.data

    // asynchronous operation
    // 模拟请求，999ms后返回，传入data就成功
    setTimeout(() => {
        if (data) {
            if (success) {
                success(data)
            }
        }
        else {
            if (fail) {
                fail('failed')
            }
        }
    }, 999);
}

const login = promisify(wx.login)
const getUserInfo = promisify(wx.getUserInfo)
const pImitationPost = promisify(imitationPost)   //我们将请求函数也封装成success和fail的模式

Page({
    data: {
        status:''
    },
    onLoad: function (options) {
        // this.testAsyc1()
        this.testAsyc2()
    },
    testAsyc0: function () {
        // 获取系统信息
        // wx.getSystemInfo({
        //     success: res => {
        //         // success
        //         console.log(res)
        //     },
        //     fail: res => {

        //     }
        // })
        getSystemInfo().then(res => {
            // success
            console.log(res)
        }).catch(res => {

        })
    },
    testAsyc1: function () {
        let z = this
        // 模拟获取code，然后将code传给后台，成功后获取userinfo，再将userinfo传给后台
        // 登录
        wx.login({
            success: res => {
                console.log(1)
                let code = res.code
                // 请求
                imitationPost({
                    url: '/test/loginWithCode',
                    data: {
                        code
                    },
                    success: data => {
                        console.log(2)
                        // 获取userInfo
                        wx.getUserInfo({
                            success: res => {
                                console.log(3)
                                let userInfo = res.userInfo
                                // 请求
                                imitationPost({
                                    url: '/test/saveUserInfo',
                                    data: {
                                        userInfo
                                    },
                                    success: data => {
                                        console.log(4)
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
    },
    testAsyc2: function () {
        let z = this
        // 登录
        login().then(res => {
            let code = res.code
            console.log(1)
            // 请求
            pImitationPost({
                url: '/test/loginWithCode',
                data: {
                    code
                },
            }).then(data => {
                console.log(2)
                // 获取userInfo
                getUserInfo().then(res => {
                    console.log(3)
                    let userInfo = res.userInfo
                    // 请求
                    pImitationPost({
                        url: '/test/saveUserInfo',
                        data: {
                            userInfo
                        },
                    }).then(data => {
                        console.log(4)
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
    }
})