// pages/color/color.js

const W = wx.getSystemInfoSync().screenWidth
const rate = 750.0 / W
const HUE_H = 600 //rpx
const MAX_HUE = 600.0 / rate
console.log(rate)

function inRange(value, min, max) {
    return value >= min && value < max
}
Page({
    data: {
        colors: [{
                r: 220,
                g: 20,
                b: 20
            },
            {
                r: 120,
                g: 120,
                b: 120
            }, {
                r: 170,
                g: 70,
                b: 70
            },
        ],
        color: {
            r: 255,
            g: 0,
            b: 0
        },
        huePosition: 0
    },
    onLoad: function(options) {

    },
    hueHandler(e) {
        console.log(e)
        let {
            x,
            y
        } = e.detail
        let {
            offsetTop
        } = e.currentTarget

        console.log(y - offsetTop)
    },
    handleHueTouch(e) {
        if (e.touches.length == 1) {
            let {
                pageY
            } = e.touches[0]
            let {
                offsetTop
            } = e.currentTarget

            let pos = pageY - offsetTop
            pos = pos > MAX_HUE ? MAX_HUE : (pos < 0 ? 0 : pos)
            pos *= rate
            // console.log(pos)
            let percent = pos / HUE_H
            // console.log(percent + '%')
            // 1530
            // 0% ~ 17% (255,0,0) ~ (255,255,0)
            // 17% ~ 33% (255,255,0) ~ (0,255,0)
            // 33% ~ 50% (0,255,0) ~ (0,255,255)
            // 50% ~ 67% (0,255,255) ~ (0,0,255)
            // 67% ~ 83% (0,0,255) ~ (255,0,255)
            // 83% ~ 100% (255,0,255) ~ (255,0,0)
            let v = 1530 * percent
            let n = parseInt(v / 255)
            v = parseInt(v - n * 255)
            console.log(v + ',' + percent)
            percent *= 100
            let color = {
                r: 0,
                g: 0,
                b: 0
            }
            if (inRange(percent, 0, 17)) {
                color = {
                    r: 255,
                    g: v,
                    b: 0
                }
            } else if (inRange(percent, 17, 33)) {
                color = {
                    r: 255 - v,
                    g: 255,
                    b: 0
                }
            } else if (inRange(percent, 33, 50)) {
                color = {
                    r: 0,
                    g: 255,
                    b: v
                }
            } else if (inRange(percent, 50, 67)) {
                color = {
                    r: 0,
                    g: 255 - v,
                    b: 255
                }
            } else if (inRange(percent, 67, 83)) {
                color = {
                    r: v,
                    g: 0,
                    b: 255
                }
            } else if (inRange(percent, 83, 100)) {
                color = {
                    r: 255,
                    g: 0,
                    b: 255 - v
                }
            } else {
                color = {
                    r: 255,
                    g: 0,
                    b: 0
                }
            }

            // (to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
            this.setData({
                huePosition: pos,
                color
            })
        }
    },
    hueStart(e) {
        this.handleHueTouch(e)
    },
    hueMove(e) {
        this.handleHueTouch(e)
    }
})