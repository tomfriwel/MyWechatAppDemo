//index.js
// var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  // tap: function (e) {
  //   for (var i = 0; i < order.length; ++i) {
  //     if (order[i] === this.data.toView) {
  //       this.setData({
  //         toView: order[i + 1]
  //       })
  //       break
  //     }
  //   }
  // },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  userInfoTap: function () {
    wx.navigateTo({
      url: '../userInfo/userInfo'
    })
  },
  mapTap: function () {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  cardTap: function () {
    wx.navigateTo({
      url: '../card/card'
    })
  },
  actionTap: function () {
    wx.navigateTo({
      url: '../action/action'
    })
  },
})