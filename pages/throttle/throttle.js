// pages/throttle/throttle.js
const util = require('../../utils/util.js')

Page({
    data: {
        text: 'tomfriwel'
    },
    onLoad: function (options) {

    },
    tap:function() {
        console.log((new Date()).getSeconds())
    },
    tap: util.throttle(function (e) {
        console.log(this)
        console.log(e)
        console.log((new Date()).getSeconds())
    }, 1000)
})