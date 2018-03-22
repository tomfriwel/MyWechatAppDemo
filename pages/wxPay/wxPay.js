// pages/wxPay/wxPay.js
var network = require("../../utils/network.js")

Page({
    data: {

    },
    onLoad: function (options) {

    },
    scan:function(){
        wx.scanCode({
            success:function(res){
                var code = res.result
                console.log(code)

                network.post("http://wx.jue.so/pay/testMicroPay.php", {"auth_code":code}, {}, function(res){
                    console.lo
                    console.log(res)
                }, function (res) {
                    console.log(res)
                })
            }
        })
    }
})