// pages/snow/snow.js

var snow = {
    "1": [],
    "2": [],
    "3": [],
    "4": []
}

const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight
// var W = 300
// var H = 300
Page({
    data: {

    },
    onLoad: function (options) {
        var z = this
// return
        // this.drawSnow()

        // return

        // 近处的雪花大且速度更快，给人一种透视的感觉
        setInterval(function () {
            z.play(1)
        }, 90)
        setInterval(function () {
            z.play(2)
        }, 50)
        setInterval(function () {
            z.play(3)
        }, 30)
        setInterval(function () {
            z.play(4)
        }, 10)
    },
    play: function (speed) {
        var ctx = wx.createCanvasContext('myCanvas' + speed, this)

        // 以density分之一来创建雪花
        var density = speed == 1 ? 2 : (speed == 2 ? 10 : (speed == 3 ? 20 : 30))
        if (Math.ceil(Math.random() * density) == 1) {
            this.createSnow(ctx, speed)
        }

        //绘制雪花
        var currentSnow = snow[speed]

        for (var i in snow[speed]) {
            snow[speed][i].y++
            var item = snow[speed][i]
            this.singleSnow(ctx, item.x, item.y, item.r)

            //将超出屏幕的雪花移除
            if (item.y > H) {
                var index = snow[speed].indexOf(item)
                if (index > -1) {
                    currentSnow.splice(index, 1)
                }
                continue
            }
        }
        snow[speed] = currentSnow

        ctx.draw()
    },
    createSnow(ctx, speed) {
        var x = Math.ceil(Math.random() * W)
        var y = 0 //Math.ceil(Math.random() * H/6)

        var radius = speed * 2 //Math.ceil(Math.random() * 6)   //雪花半径

        snow[speed].push({ x: x, y: y, r: radius })
    },
    singleSnow(ctx, x, y, r) {
        // Create circular gradient
        const grd = ctx.createCircularGradient(x, y, r)
        grd.addColorStop(0, '#FFFFFF')
        grd.addColorStop(1, '#9BA9CA')

        // Draw arc
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.setFillStyle(grd)
        ctx.fill()
        ctx.closePath()
    },
    drawSnow: function () {
        var center = { x: 100, y: 100 }
        var r = 100

        var x = r
        var y = 0

        var ctx = wx.createCanvasContext('myCanvas' + 1, this)
        ctx.setLineWidth(5)
        ctx.setLineCap('round')
        ctx.setStrokeStyle("#FFFFFF")

        this.drawRotateLine(ctx, center, { x: 0, y: 0 }, { x: x, y: y }, 0)
        this.drawRotateLine(ctx, center, { x: r / 2, y: 0 }, { x: r / 2 + r / 4, y: r / 4 * 1.732 }, 0)
        this.drawRotateLine(ctx, center, { x: r / 2, y: 0 }, { x: r / 2 + r / 4, y: - r / 4 * 1.732 }, 0)

        ctx.draw()
    },
    drawLine: function (ctx, p0, p1) {
        ctx.beginPath()
        ctx.moveTo(p0.x, p0.y)
        ctx.lineTo(p1.x, p1.y)
        ctx.stroke()
        ctx.closePath()
    },
    drawRotateLine: function (ctx, center, p0, p1, rotate) {
        console.log(p0, p1)
        if (rotate != undefined) {
            p0 = this.getRotatePoint(p0, rotate)
            p1 = this.getRotatePoint(p1, rotate)
        }

        console.log(p0, p1)

        this.drawLine(ctx,
            { x: center.x + p0.x, y: center.y + p0.y },
            { x: center.x + p1.x, y: center.y + p1.y })

    },
    getRotatePoint: function (x, y, rotate) {
        var degree = Math.PI / 180.0 * rotate
        console.log(degree)
        return {
            x: x * Math.cos(degree) - y * Math.sin(degree),
            y: x * Math.sin(degree) + Math.cos(degree)
        }
    }
})