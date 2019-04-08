Page({
    data: {
        tires: []
    },
    onLoad: function(options) {
        // this.add()
    },
    add() {
        // wx.chooseVideo({
        //     maxDuration: 10
        // })
        let ctx = wx.createCameraContext(this)
        ctx.startRecord({
            complete: res => {
                console.log(res)
            }
        })
    },
    stop() {
        // wx.chooseVideo({
        //     maxDuration: 10
        // })
        let ctx = wx.createCameraContext(this)
        ctx.stopRecord({
            complete: res => {
                console.log(res)
                // tempThumbPath
                // tempVideoPath
                if (res.tempVideoPath && res.tempThumbPath) {
                    wx.navigateTo({
                        url: '/pages/video/video?info='+JSON.stringify(res),
                    })
                }
            }
        })
    },
})