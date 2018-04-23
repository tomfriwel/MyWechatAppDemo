// pages/audio/audio.js
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

    play:function() {
        wx.getBackgroundAudioPlayerState({
            success: function (res) {
                var status = res.status
                var dataUrl = res.dataUrl
                var currentPosition = res.currentPosition
                var duration = res.duration
                var downloadPercent = res.downloadPercent
            }
        })
        wx.playBackgroundAudio({
            dataUrl: 'http://dl.stream.qqmusic.qq.com/C400001jrlSF2l6KBm.m4a?vkey=EABE36738DA6042E29B50BC4AA9BEA607FDED8A9FB74980925616BF0074FDDA814B0162FBFCC727D793181ABC91B935905B9A84B393D4BD3&guid=8462008780&uin=976932447&fromtag=66',
            title: 'audio test',
            coverImgUrl: '/images/location.png',
            complete: function (res) {
                console.log(res)
            }
        })
    }
})