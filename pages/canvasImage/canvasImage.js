// pages/canvasImage/canvasImage.js
const ImageFilters = require('../../utils/ImageFilters.js')
// const welFilters = require('../../utils/welImageFilters.js')

console.log(ImageFilters)
// console.log(welFilters)

const canvasId = 'hehe'
const canvasW = 300
const canvasH = 300

let originalData = null

const filters = {
    original: function(data) {
        return data
    },
    black: function(data) {
        for (var i = 0; i < data.length; i += 4) {
            //计算获取单位元素的RBG然后取平均值 
            var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg > 128 ? 255 : 0;
            data[i + 1] = avg > 128 ? 255 : 0;
            data[i + 2] = avg > 128 ? 255 : 0;
        }
        return data
    },
    gray: function(data) {
        for (var i = 0; i < data.length; i += 4) {
            //计算获取单位元素的RBG然后取平均值 然后复制给自身得到灰色的图像 
            var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg;
            data[i + 1] = avg;
            data[i + 2] = avg;
        }
        return data
    }
}

const keys = Object.keys(filters)

Page({
    data: {
    },
    onLoad: function(options) {
        
    },
    filterTap() {
        function ImageData(data, w, h) {
            this.data = new Uint8ClampedArray(data)
            this.width = w
            this.height = h
        }

        let imageData = new ImageData(originalData, canvasW, canvasH)

        // console.log(imageData.data[0])
        // let filtered = ImageFilters.GrayScale(imageData)
        let filtered = ImageFilters.Mosaic(imageData, 10)
        // console.log(imageData.data[0])
        // let srcLength = data.length
        // let srcPixels = data
        // let dstPixels = new Uint8ClampedArray(srcLength)
        
        // for (var i = 0; i < srcLength; i += 4) {
        //     var intensity = (srcPixels[i] * 19595 + srcPixels[i + 1] * 38470 + srcPixels[i + 2] * 7471) >> 16;
        //     //var intensity = (srcPixels[i] * 0.3086 + srcPixels[i + 1] * 0.6094 + srcPixels[i + 2] * 0.0820) | 0;
        //     dstPixels[i] = dstPixels[i + 1] = dstPixels[i + 2] = intensity;
        //     dstPixels[i + 3] = srcPixels[i + 3];
        // }
        wx.canvasPutImageData({
            canvasId: canvasId,
            data: filtered.data,
            x: 0,
            y: 0,
            width: canvasW,
            height: canvasH,
            complete: res => {
                console.log(res)
            }
        })
        return
        const z = this
        wx.showActionSheet({
            itemList: keys,
            success: res => {
                let {
                    tapIndex
                } = res

                let data = new Uint8ClampedArray(originalData)
                data = filters[keys[tapIndex]](data)

                wx.canvasPutImageData({
                    canvasId: canvasId,
                    data: data,
                    x: 0,
                    y: 0,
                    width: canvasW,
                    height: canvasH,
                    complete: res => {
                        console.log(res)
                    }
                })
            }
        })
    },
    choose() {
        const z = this
        const ctx = wx.createCanvasContext(canvasId)
        wx.chooseImage({
            count: 1,
            success: function(res) {
                if (res.tempFilePaths.length) {
                    let path = res.tempFilePaths[0]

                    ctx.drawImage(path, 0, 0, canvasW, canvasH)
                    ctx.draw(false, () => {
                        console.log('draw done')
                        z.getCavasImageData()
                    })

                }
            },
        })
    },
    getCavasImageData() {
        const z = this
        wx.canvasGetImageData({
            canvasId: canvasId,
            x: 0,
            y: 0,
            width: canvasW,
            height: canvasH,
            success: res => {
                console.log(res)
                let {
                    data
                } = res

                originalData = data
            }
        })
    }
})