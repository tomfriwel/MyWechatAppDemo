// canvas.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    spreakingAnimation: {},//放大动画 
    r: 0,
    c: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var animation = wx.createAnimation({
      duration: 1000,
    })
    animation.opacity(0).scale(3, 3).step();//修改透明度,放大  
    this.setData({
      spreakingAnimation: animation.export()
    }) 
    var that = this;
    this.interval = setInterval(function () {
      that.drawContent()
      console.log(that.data.r)
    }, 10)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.interval)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  drawContent: function() {
    var r = this.data.r;
    var c = this.data.c;

    c *= r>100||r<0?-1:1;
    r += c;
    this.setData({r: r, c: c})
    var context = wx.createContext()
    context.beginPath(0)
    context.arc(151, 151, r, 0, Math.PI * 2)
    context.setFillStyle('#ffffff')
    context.setStrokeStyle('#aaaaaa')
    context.fill()
    context.stroke()
    wx.drawCanvas({
      canvasId: 'my_canvas',
      actions: context.getActions()
    })
  }
})