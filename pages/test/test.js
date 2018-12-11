"use strict";

// 引入 co 和 promisify 帮助我们进行异步处理
const co = require('../../lib/co.js');
const promisify = require('../../lib/promisify.js');


// 需要使用的微信 API，转成返回 Promise 的接口
const login = promisify(wx.login);
const getUserInfo = promisify(wx.getUserInfo);
const getSystemInfo = promisify(wx.getSystemInfo);

// 获得小程序实例
const app = getApp();

// 定义页面
Page({
    data: {},
    onLoad: function() {
        // 统计几年内周六周日在一月中出现的次数
        let date = new Date();
        date.setFullYear(2019)
        date.setMonth(0)
        date.setDate(1)
        console.log(date)
        console.log(date.getDay()) //0,6
        let store = []
        while (date.getFullYear() < 2020) {
            let day = date.getDay()
            let monthDate = date.getDate()
            if (day == 6 || day == 0) {
                store.push(monthDate)
            }
            if (day == 0) {
                date.setDate(monthDate + 6)
            } else {
                date.setDate(monthDate + 1)
            }

        }

        // let store = [5,6,12,13,19,20,26,27,111,2,3,9,10,16,17,23,24,111,2,3,9,10,16,17,23,24,30,31,6,7,13,14,20,21,27,28,4,5,11,12,18,19,25,26,1,2,8,9,15,16,22,23,29,30,6,7,13,14,20,21,27,28,3,4,10,11,17,18,24,25,31,1,7,8,14,15,21,22,28,29,5,6,12,13,19,20,26,27,2,3,9,10,16,17,23,24,30,1,7,8,14,15,21,22,28,29]
        // let store = [5, 6, 12, 13, 19, 20, 26, 27, 6, 7, 13, 14, 20, 21, 27, 28, 6, 7, 13, 14, 20, 21, 27, 28,5,6,12,13,19,20,26,27]
        var frequency = {}; // array of frequency.
        var max = 0; // holds the max frequency.
        var result; // holds the max frequency element.
        for (var v in store) {
            frequency[store[v]] = (frequency[store[v]] || 0) + 1; // increment frequency.
            if (frequency[store[v]] > max) { // is this frequency > max so far ?
                max = frequency[store[v]]; // update max.
                result = store[v]; // update result.
            }
        }
        console.log('max:' + max)
        console.log('result:' + result)
        console.log(frequency)
    },
    onShow: function() {

    },
    login: function() {
        // this.setData({ gameInfo: "正在登陆" });
        // const loginResult = yield login();
        // const userInfo = yield getUserInfo();
        // const { nickName, avatarUrl } = userInfo.userInfo;
        // this.setData({ myName: nickName, myAvatar: avatarUrl })
    },
    toNextPageHandler: function() {
        wx.navigateTo({
            url: '/pages/scrollView/scrollView',
        })
    },
    tap() {
        wx.chooseImage({
            success: function(res) {
                let path = res.tempFilePaths[0]
                wx.uploadFile({
                    url: 'http://gallery.tomfriwel.com/upload',
                    filePath: path,
                    name: 'myfile',
                })
            },
        })
    }
});