const init = function () {
    let z = this
    z.draw = function () {
        let ctx = wx.createCanvasContext('test', this)
        ctx.setFillStyle('red')
        ctx.beginPath()
        ctx.arc(222, 222, 10, 0, 2 * Math.PI, true)
        ctx.fill()
        ctx.closePath()
        ctx.draw()
    }
}

module.exports = {
    init
}