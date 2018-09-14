let timer = null
let count = 0

function show() {
    count++
    if (timer) {
        return
    }
    let title = '加载中...'
    timer = setTimeout(() => {
        wx.showLoading({
            title,
            mask: true
        })
    }, 400)
}

function hide() {
    count--
    if (timer && count == 0) {
        clearTimeout(timer)
        timer = null
    }
    wx.hideLoading()
}

function fail(content) {
    if (content == null || content == undefined) {
        content = ''
    } else if (content !== null && typeof content === 'object') {
        try {
            content = JSON.stringify(content)
        } catch (e) {
            console.log(e)
            content = typeof(content)
        }
    }

    content = content + ''
    content = content.substring(0, 499)
    wx.showModal({
        title: '提示',
        content,
        showCancel: false,
        success: function(res) {}
    })
}

module.exports = {
    show,
    hide,
    fail,
}