// pages/wxApiTest/wxApiTest.js
const app = getApp()
const networkp = require('../../utils/networkp.js')
const api = require('../../utils/api-old.js')

Page({
    data: {

    },
    onLoad: function (options) {

    },
    onShow: function() {
        wx.showShareMenu({
            withShareTicket: true,
        })
    },
    login: function () {
        wx.login({
            success: function (res) {
                console.log('wx.login:')
                console.log(res)

                if (res.code) {
                    networkp.post({
                        url: api.wechat.login,
                        data: {
                            code: res.code
                        }
                    }).then(data => {
                        console.log(data)
                    }).catch(res => {

                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        });
    },
    showShare: function() {
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '自定义转发标题',
            path: '/pages/wxShareTo/wxShareTo?id=123123',
            success: function (res) {
                // 转发成功
                console.log(res)
                console.log(res.groupMsgInfos)
                console.log(res.shareTickets)
                // 只有转发到群聊中打开才可以获取到 shareTickets 返回值，单聊没有 shareTickets
                if (res.shareTickets && res.shareTickets.length>0) {
                    app.getShareInfo(res.shareTickets[0])
                }
            },
            fail: function (res) {
                // 转发失败
                console.log(res)
            }
        }
    }
})