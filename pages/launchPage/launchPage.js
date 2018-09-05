// pages/launchPage/launchPage.js

const app = getApp()
const network = require('../../utils/network.js')

Page({
    data: {

    },
    onLoad: function (options) {
        console.log('launchPage onLoad:' + (new Date()).getTime())
    },
    onReady: function () {
        console.log('launchPage onReady:' + (new Date()).getTime())
        app.loginCallback = function () {
            console.log('page callback:' + (new Date()).getTime())
            wx.redirectTo({
                url: '/pages/login/login',
            })
        }

        wx.showLoading({
            title: '正在加载...',
        })
        app.login(() => {
            setTimeout(function () {
                wx.hideLoading()
            }, 500)
        })
    },
    onShow: function () {
        console.log('launchPage onShow:' + (new Date()).getTime())
    },
})