// test.js

var test = require("../../components/templates/test/test.js")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        index:'123',
        list: [
            1,
            2,
            3
        ],
        value:"",
        fontWeights:[
            'normal',
            'bold',
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
        ],
        item:{
            title:12123
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // test.init.apply(this, [[1,2,3]]);
        // this.beginAnimation()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    beginAnimation(){
        let ctx = wx.createCanvasContext('myCanvas')

        let radius = 80
        let i = 0
        let x = radius * Math.sin(i)
        let y = radius * Math.cos(i)

        let adegree = Math.PI / 180.0

        const run = function () {
            i = i > 2 * Math.PI ? 0 : i + 30*adegree   //每次增加1度
            x = radius * Math.sin(i)    //计算距离中心的x
            y = radius * Math.cos(i)    //计算距离中心的yy

            // 用带透明度的color覆盖当前画布
            ctx.setFillStyle('rgba(255, 255, 255, 0.1)')
            ctx.fillRect(0, 0, 300, 300)

            // 在画布上绘制圆
            ctx.setFillStyle('red')
            ctx.beginPath()
            ctx.arc(150 + x, 150 + y, 15, 0, Math.PI * 2, true)
            ctx.fill()
            ctx.closePath()
            ctx.draw(true)

            setTimeout(run, 500)
        }

        run()
    },
    formHandler(e){
        console.log(e)
        let templateId = 'PgMPzx7i2YjxtyKW-s55OjZe-TbpB1idA54rBa2wPww'
        let formId = e.detail.formId
    },
    onPullDownRefresh(){
        // wx.showLoading({
        //     title: 'haha',
        // })
        wx.show
        // wx.showNavigationBarLoading()
        setTimeout(() => {
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
        }, 1000)
    },
    upper: function (event) {
        console.log("refresh")
    },
    onShareAppMessage: function (res) {
        return {
            title: '自定义转发标题',
            path: '/pages/test/test',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    tap: function () {
        wx.showShareMenu({
            withShareTicket: true
        })
        // wx.showActionSheet({
        //     itemList: ['Share', 'test1', 'test2'],
        //     success: function (res) {
        //         console.log(res.tapIndex)
        //         if(res.tapIndex==0) {
        //             wx.showShareMenu({
        //                 withShareTicket: true
        //             })
        //         }
        //     },
        //     fail: function (res) {
        //         console.log(res.errMsg)
        //     }
        // })
    }
})