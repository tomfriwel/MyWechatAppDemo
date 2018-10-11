// pages/color/color.js
Page({
    data: {
        colors: [{
                r: 220,
                g: 20,
                b: 20
            },
            {
                r: 120,
                g: 120,
                b: 120
            }, {
                r: 170,
                g: 70,
                b: 70
            },
        ]
    },
    onLoad: function(options) {

    },
    hueHandler(e) {
        console.log(e)
        const z = this;
        const query = wx.createSelectorQuery().in(this)
        query.select('#color-picker-hue').boundingClientRect(function (res) {
            // res.top // 这个组件内 #the-id 节点的上边界坐标
            console.log(res)
        }).exec()
    }
})