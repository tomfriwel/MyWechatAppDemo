// pages/clock/clock.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        //   this.beginAnimation()
        this.drawPointer()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },
    drawPointer() {
        let ctx = wx.createCanvasContext('myCanvas')


        let adegree = Math.PI / 180.0
        let radius = 80
        let i = 180 * adegree
        let x = radius * Math.sin(i)
        let y = radius * Math.cos(i)

        const run = function () {
            // i = i > 2 * Math.PI ? 0 : i + 6 * adegree   //每次增加1度
            i = i - 6 * adegree
            x = radius * Math.sin(i)    //计算距离中心的x
            y = radius * Math.cos(i)    //计算距离中心的yy

            // 在画布上绘制圆
            ctx.setFillStyle('red')
            ctx.beginPath()
            ctx.arc(150 + x, 150 + y, 15, 0, Math.PI * 2, true)
            ctx.fill()

            ctx.moveTo(150, 150)
            ctx.lineTo(150 + x, 150 + y)
            ctx.stroke()

            ctx.closePath()
            ctx.draw()

            setTimeout(run, 1000)
        }

        run()

    },
    beginAnimation() {
        let ctx = wx.createCanvasContext('myCanvas')

        let radius = 80
        let i = 0
        let x = radius * Math.sin(i)
        let y = radius * Math.cos(i)

        let adegree = Math.PI / 180.0

        const run = function () {
            i = i > 2 * Math.PI ? 0 : i + 30 * adegree   //每次增加1度
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
})