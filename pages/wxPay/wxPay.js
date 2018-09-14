// pages/wxPay/wxPay.js
const network = require("../../utils/network.js")
const api = require("../../utils/api-old.js")

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

                network.post(api.testUrl, {"auth_code":code}, {}, function(res){
                    console.lo
                    console.log(res)
                }, function (res) {
                    console.log(res)
                })
            }
        })
    }
})