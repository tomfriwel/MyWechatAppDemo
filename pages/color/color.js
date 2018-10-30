// pages/color/color.js
// https://www.htmlcolor-picker.com/
const tools = require('./color-conversion-algorithms.js')
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
                r: 255,
                g: 255,
                b: 0
            },
            {
                r: 0,
                g: 255,
                b: 255
            },
            {
                r: 255,
                g: 0,
                b: 255
            },
            {
                r: 128,
                g: 255,
                b: 128
            },
            {
                r: 128,
                g: 128,
                b: 255
            },
            {
                r: 255,
                g: 128,
                b: 128
            },
            {
                r: 191,
                g: 128,
                b: 191
            },
            {
                r: 128,
                g: 191,
                b: 191
            },
            {
                r: 191,
                g: 191,
                b: 128
            },
        ],
        color: {
            r: 255,
            g: 0,
            b: 0
        },
        hue: 1,
        pickerColor: {
            r: 255,
            g: 0,
            b: 0
        },
        huePosition: 0
    },
    onLoad: function(options) {
    },
    // color picker
    // colorPickerHandler(e) {
    //     console.log(e)
    //     let {
    //         x,
    //         y
    //     } = e.detail
    //     let {
    //         offsetTop
    //     } = e.currentTarget

    //     console.log(y - offsetTop)
    // },
    handleColorPickerTouch(e) {
        if (e.touches.length == 1) {
            let {
                pageX,
                pageY,
            } = e.touches[0]
            let {
                offsetLeft,
                offsetTop,
            } = e.currentTarget

            let posX = pageX - offsetLeft
            let posY = pageY - offsetTop
            posX = posX > MAX_HUE ? MAX_HUE : (posX < 0 ? 0 : posX)
            posX *= rate
            let percentX = posX / HUE_H

            posY = posY > MAX_HUE ? MAX_HUE : (posY < 0 ? 0 : posY)
            posY *= rate
            let percentY = posY / HUE_H

            // console.log(percentX + ',' + percentY)

            // to right saturation
            // to top lightness
            // let temp = tools.hslToRgb({
            //     h: this.data.hue,
            //     s: percentX,
            //     l: sb2sl(percentX, 1 - percentY).l
            // })
            let temp = tools.hsbToRgb({
                h: this.data.hue,
                s: percentX,
                b: 1 - percentY
            })
            let pickerColor = {
                r: parseInt(temp[0]),
                g: parseInt(temp[1]),
                b: parseInt(temp[2])
            }
            this.setData({
                colorPickerPosition: {
                    x: posX,
                    y: posY,
                },
                pickerColor
            })
            console.log(pickerColor)
            // console.log({
            //     h: this.data.hue,
            //     s: percentX,
            //     l: sb2sl(percentX, 1 - percentY).l
            // })
        }
    },
    colorPickerStart(e) {
        this.handleColorPickerTouch(e)
    },
    colorPickerMove(e) {
        this.handleColorPickerTouch(e)
    },
    // hue
    // hueHandler(e) {
    //     let {
    //         x,
    //         y
    //     } = e.detail
    //     let {
    //         offsetTop
    //     } = e.currentTarget

    //     console.log(y - offsetTop)
    // },
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

            let percent = pos / HUE_H
            // console.log(percent + '%')
            // 1530
            // 0% ~ 17% (255,0,0) ~ (255,255,0)
            // 17% ~ 33% (255,255,0) ~ (0,255,0)
            // 33% ~ 50% (0,255,0) ~ (0,255,255)
            // 50% ~ 67% (0,255,255) ~ (0,0,255)
            // 67% ~ 83% (0,0,255) ~ (255,0,255)
            // 83% ~ 100% (255,0,255) ~ (255,0,0)

            let temp = tools.hslToRgb({
                h: percent,
                s: 1,
                l: 0.5
            })
            let color = {
                r: parseInt(temp[0]),
                g: parseInt(temp[1]),
                b: parseInt(temp[2])
            }
            this.setData({
                huePosition: pos,
                hue: percent,
                color: color,
                pickerColor:color
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