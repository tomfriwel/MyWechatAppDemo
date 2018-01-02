// pages/qrcode/qrcode.js

var QRCode = require('../../utils/qrcode.js')



// var qrcode = new QRCode(document.getElementById("qrcode"), {
//     text: "http://jindo.dev.naver.com/collie",
//     width: 128,
//     height: 128,
//     colorDark: "#000000",
//     colorLight: "#ffffff",
//     correctLevel: QRCode.CorrectLevel.H
// });

Page({
    data: {

    },
    onLoad: function (options) {

        var ctx = wx.createCanvasContext('canvas')

        QRCode.run(ctx)
    },
})