// pages/drag/drag.js

Page({
    data: {
        items: [{
                x: 100,
                y: 10
            },
            {
                x: 100,
                y: 140
            },
            {
                x: 200,
                y: 100
            },
            {
                x: 230,
                y: 400
            },
            {
                x: 30,
                y: 300
            },
        ]
    },
    onLoad: function(options) {

    },
    onReady: function() {

    },
    endHandler: function(e) {
        let {
            index
        } = e.currentTarget.dataset
        console.log(e)
        let {
            changedTouches
        } = e
        if (changedTouches.length == 1) {
            let touch = changedTouches[0]
            let {
                pageX,
                pageY
            } = touch

            this.data.items[index] = {
                x: pageX-25,
                y: pageY-25
            }
            this.setData({
                items: this.data.items
            })
        }
    }
})