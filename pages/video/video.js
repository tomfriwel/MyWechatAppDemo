// pages/video/video.js
Page({

    /**
     * Page initial data
     */
    data: {
        tempVideoPath: null,
        tempThumbPath: ""
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        let {
            info
        } = options
        info = JSON.parse(info)
        let {
            tempVideoPath,
            tempThumbPath
        } = info
        this.setData({
            tempVideoPath,
            tempThumbPath
        })
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function() {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function() {

    }
})