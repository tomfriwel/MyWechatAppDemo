//app.js

const network = require('./utils/network.js')
const doubanApi = require('./utils/douban_api.js')

const networkp = require('./utils/networkp.js')
const api = require('./utils/api.js')

let isNormal = true
const launchPath = 'pages/launchPage/launchPage'
let scene = null

App({
    onLaunch: function (options) {
        console.log('app onLaunch:' + (new Date()).getTime())
        console.log(options)
        const z = this

        let { scene, path, query } = options

        if (path != launchPath) {
            isNormal = false
        }

        z.addUser()
    },
    onShow: function (options) {
        console.log('app onShow:' + (new Date()).getTime())
        console.log(options)
        scene = options.scene

        // 带 shareTicket 的小程序消息卡片
        if(scene == 1044) {
            let shareTicket = options.shareTicket
            let id = options.query.id
            this.getShareInfo(shareTicket)
        }
    },
    setupLogin: function () {
        console.log('setupLogin:' + (new Date()).getTime())
        var z = this
        // setup login
        var loginData = wx.getStorageSync('loginData') || null

        if (loginData) {
            z.globalData.isLogin = 1
            z.globalData.loginData = loginData

            if (z.loginCallback) {
                console.log('app callback:' + (new Date()).getTime())
                z.loginCallback()
            }
        }
        else {
            z.globalData.isLogin = 0
            z.globalData.loginData = null

            if (z.unloginCallback) {
                z.unloginCallback()
            }
        }
    },
    getUserInfo: function (cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    login: function (callback) {
        let z = this
        // login code, code below is just simulation

        setTimeout(function () {
            wx.setStorageSync('loginData', { id: '123' })
            z.setupLogin()

            if (callback) {
                callback()
            }
        }, 0)
    },
    getShareInfo: function (shareTicket) {
        const z = this
        wx.getShareInfo({
            shareTicket: shareTicket,
            success: function (res) {
                console.log(res)
                let {encryptedData, iv} = res

                if(encryptedData && iv) {
                    z.getDecodeEncryptedData(encryptedData, iv)
                }
            },
            fail: function (res) {
                console.log(res)
            }
        })
    },
    getDecodeEncryptedData: function (encryptedData, iv) {
        const z = this
        wx.login({
            success: function (res) {
                if (res.code) {
                    networkp.post({
                        url: api.wechat.getDecodeEncryptedData,
                        data: {
                            code: res.code,
                            encryptedData: encryptedData,
                            iv: iv
                        }
                    }).then(res => {
                        console.log('获取openGId结果：')
                        console.log(res)
                        if(res.openGId) {
                            z.bindGroupAndUser(res.openGId)
                        }
                    }).catch(res => {

                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        });
    },
    addUser:function() {
        wx.getUserInfo({
            success: function (res) {
                var userInfo = res.userInfo
                var nickName = userInfo.nickName
                var avatarUrl = userInfo.avatarUrl
                var gender = userInfo.gender //性别 0：未知、1：男、2：女
                var province = userInfo.province
                var city = userInfo.city
                var country = userInfo.country

                wx.login({
                    success: res=> {
                        if (res.code) {
                            networkp.post({
                                url: api.wechat.addUser,
                                data: {
                                    code: res.code,
                                    nickName: nickName,
                                    avatarUrl: avatarUrl
                                }
                            }).then(data => {
                                console.log('成功添加用户信息')
                                console.log(data)
                            }).catch(res => {

                            })
                        }
                    }
                })
            }
        })
    },
    bindGroupAndUser: function(openGId) {
        const z = this
        wx.login({
            success: res=>{
                if (res.code) {
                    networkp.post({
                        url: api.wechat.bindGroupAndUser,
                        data: {
                            code: res.code,
                            openGId: openGId
                        }
                    }).then(data => {
                        console.log('成功绑定群与群成员关系')
                        console.log(data)

                        if (scene && scene == 1044) {
                            networkp.post({
                                url: api.wechat.getGroupUserList,
                                data: {
                                    openGId: openGId,
                                }
                            }).then(data => {
                                console.log('list')
                                console.log(data)

                                console.log('call listCallback')
                                if (z.listCallback) {
                                    z.listCallback(data)
                                }
                            }).catch(res => {

                            })
                        }
                    }).catch(res => {

                    })
                }
            }
        })
    },
    globalData: {
        userInfo: null,
        loginData:{},
        list:null
    }
})