import weCropper from '../../utils/weCropper.js'
import smartcrop from '../../utils/smartcrop.js'
const device = wx.getSystemInfoSync()

console.log(smartcrop)

var w = device.windowWidth
var h = 54 / 85.6 * device.windowWidth

Page({
    data: {
        cropperOpt: {
            id: 'cropper',
            width: w,
            height: h,
            scale: 2.5,
            zoom: 8
        },
        path:""
    },
    touchStart(e) {
        this.wecropper.touchStart(e)
    },
    touchMove(e) {
        this.wecropper.touchMove(e)
    },
    touchEnd(e) {
        this.wecropper.touchEnd(e)
    },
    getCropperImage() {
        this.wecropper.getCropperImage((src) => {
            if (src) {
                wx.previewImage({
                    current: '', // 当前显示图片的http链接
                    urls: [src] // 需要预览的图片http链接列表
                })
            } else {
                console.log('获取图片地址失败，请稍后重试')
            }
        })
    },
    uploadTap() {
        const self = this

        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success(res) {
                const src = res.tempFilePaths[0]

                self.wecropper.pushOrign(src)
            }
        })
    },
    onLoad(option) {
        const { cropperOpt } = this.data

        new weCropper(cropperOpt)
            .on('ready', function (ctx) {
                console.log(`wecropper is ready for work!`)
            })
            .on('beforeImageLoad', (ctx) => {
                console.log(`before picture loaded, i can do something`)
                console.log(`current canvas context:`, ctx)
                wx.showToast({
                    title: '上传中',
                    icon: 'loading',
                    duration: 20000
                })
            })
            .on('imageLoad', (ctx) => {
                console.log(`picture loaded`)
                console.log(`current canvas context:`, ctx)
                wx.hideToast()
            })
    },
    click:function(e){
        var that = this
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success(res) {
                const src = res.tempFilePaths[0]
                that.setData({
                    path:src
                })
                // smartcrop.crop(src, { width: 100, height: 100 }).then(function (result) {
                //     console.log(result)
                // })
            }
        })
    },
    imageLoad:function(e){
        console.log(e)

        smartcrop.crop(e.detail, { width: 100, height: 100 }).then(function (result) {
            console.log(result)
        })
    }
})
