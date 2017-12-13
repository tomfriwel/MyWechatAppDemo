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
    data: {
    },

    // 页面显示后，进行登录和链接，完成后开始启动游戏服务
    onShow: function() {
        
            this.login();
    },

    // 微信登录后获得用户信息
    login: function () {
        // this.setData({ gameInfo: "正在登陆" });
        // const loginResult = yield login();
        // const userInfo = yield getUserInfo();
        // const { nickName, avatarUrl } = userInfo.userInfo;
        // this.setData({ myName: nickName, myAvatar: avatarUrl })
    },
});
