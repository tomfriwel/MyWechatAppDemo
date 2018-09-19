// pages/request/request.js
const app = getApp()

Page({
    data: {
        items:[]
    },
    onLoad: function(options) {

    },
    onReady: function() {
        const z = this
        app.api.movie.getList().then(res => {
            let {
                data
            } = res
            z.setData({
                items: data
            })
        }).catch(res => {})

        // 未登录测试
        // app.api.login.login().then(res => {
        //     console.log(res)
        // }).catch(res => { })


        app.api.test.test().then(res => {
            console.log(res)
        }).catch(res => { })
    },
})