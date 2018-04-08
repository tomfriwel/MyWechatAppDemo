// pages/wxShareTo/wxShareTo.js
const app = getApp()

Page({
    data: {
        list:[]
    },
    onLoad: function (options) {
        const z = this
        console.log('set listCallback')
        app.listCallback = function(data) {
            console.log('listCallback')
            console.log(data)
            z.setData({
                list:data
            })
        }
    },
    onReady: function () {

    },
    onShow: function () {

    },
})