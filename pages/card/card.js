// card.js

const api = require('../../utils/api.js')
const net = require('../../utils/network.js')

Page({
    data: {

    },
    onLoad: function(options) {
    },
    onShow: function(options) {
        console.log(options)
    },
    addCard: function() {
        net.post({
            url: api.wechat.getAddCardConfig,
            data:{},
            success: function(res) {
                console.log(res)
                let obj = res.data
                
                wx.addCard({
                    cardList: [obj], // 需要添加的卡券列表
                    success: function (res) {
                        // var cardList = res.cardList; // 添加的卡券列表信息
                        console.log(res)
                    },
                    fail:function(res){
                        console.log(res)
                    }
                });
            }
        })
    }
})