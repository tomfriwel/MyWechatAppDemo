// block.js
Page({
  data: {
    x: 0,
    y: 0
  },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  }
})