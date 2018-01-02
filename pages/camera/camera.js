// pages/camera/camera.js
Page({
    data: {

    },
    onLoad: function (options) {
    },
    tap: function (e) {
        // 只允许从相机扫码
        wx.scanCode({
            onlyFromCamera: true,
            success: (res) => {
                console.log(res)
                wx.showModal({
                    title: '',
                    content: res.result,
                })
            }
        })
    },
    takePhotoHandler: function () {
        var cameraCtx = wx.createCameraContext()
        cameraCtx.takePhoto({
            quality: 'high',
            success: function (res) {
                console.log(res)
                var path = res.tempImagePath
                // wx.showModal({
                //     title: '',
                //     content: res.tempImagePath,
                // })
                wx.getImageInfo({
                    src: path,
                    complete: function (res) {
                        console.log(res)
                    }
                })
                wx.previewImage({
                    urls: [res.tempImagePath],
                })
            }
        })
    }
})