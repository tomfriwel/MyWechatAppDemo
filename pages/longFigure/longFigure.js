// pages/longFigure/longFigure.js
Page({
    data: {

    },
    onLoad: function(options) {
        this.loadImage()
    },
    loadImage() {
        let ctx = wx.createCanvasContext('cvs', this)

        wx.getImageInfo({
            src: 'https://static1.squarespace.com/static/5a39922ff6576e7a0ba4ec30/t/5b10f2be70a6ad1221b761a8/1527837393971/433146d4_6623_4cac_b5eb_a2e85f184dce_by_yasa_hime-dcd42k0.png?format=750w',
            success: res => {
                ctx.drawImage(res.path, 0, 0, 300, 300)
                ctx.setTextAlign('center')    // 文字居中
                ctx.setFillStyle('#000000')  // 文字颜色：黑色
                ctx.setFontSize(22)         // 文字字号：22px
                ctx.fillText('“作者：张杰”', 100, 100)
                ctx.stroke()
                ctx.draw()
            }
        })
    }
})