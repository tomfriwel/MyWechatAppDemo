
function init(arr) {
    var that = this;
    
    that.setData({
        arr:arr
    })

    //相应的 操作
    that.tap = function (event) {
        console.log('tap')
        console.log(that.data.value)
        that.setData({
            value:event.detail.value
        })
    }
}

module.exports = {
    init: init
}
