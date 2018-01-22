// pages/qrcode/qrcode.js

var QRCode = require('../../utils/qrcode.js')

// console.log(QRCode)

// var qrcode = new QRCode(document.getElementById("qrcode"), {
//     text: "http://jindo.dev.naver.com/collie",
//     width: 128,
//     height: 128,
//     colorDark: "#000000",
//     colorLight: "#ffffff",
//     correctLevel: QRCode.CorrectLevel.H
// });
var qrcode

Page({
    data: {
        text: 'http://jindo.dev.naver.com/collie'
    },
    onLoad: function (options) {
        qrcode = new QRCode('canvas', {
            text: "http://jindo.dev.naver.com/collie",
            width: 150,
            height: 150,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
        });
    },
    confirmHandler: function (e) {
        console.log(e)
        var value = e.detail.value
        qrcode.makeCode(value)
    },
    inputHandler: function (e) {
        var value = e.detail.value
        this.setData({
            text: value
        })
    },
    tapHandler: function () {
        qrcode.makeCode(this.data.text)
    }
})