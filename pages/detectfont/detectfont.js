// pages/detectfont/detectfont.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    loadFont() {
        wx.loadFontFace({
            family: 'Catamaran SemiBold',
            source: 'url("https://www.tomfriwel.com/static/font/Catamaran-SemiBold.ttf")',
            success: function (res) {
                console.log(res.status) //  loaded
            },
            fail: function (res) {
                console.log(res.status) //  error
            },
            complete: function (res) {
                console.log(res.status);
            }
        });
        wx.loadFontFace({
            family: 'AritaSans Bold',
            source: 'url("https://www.tomfriwel.com/static/font/AritaSans-Bold.ttf")',
            success: function (res) {
                console.log(res.status) //  loaded
            },
            fail: function (res) {
                console.log(res) //  error
            },
            // complete: function (res) {
            //     console.log(res.status);
            // }
        });
    }
})