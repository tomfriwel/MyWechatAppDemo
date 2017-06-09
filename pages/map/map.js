// map.js
Page({
  data: {
    location: {
      longitude: 0,
      latitude: 0
    },
  onLoad: function () {
    
    this.setupLocation();
  },
    // markers: [{
      // iconPath: "/images/location.png",
      // id: 0,
      // latitude: 23.099994,
      // longitude: 113.324520,
      // width: 50,
      // height: 50
    // }],
    // polyline: [{
      // points: [{
      //   longitude: 113.3245211,
      //   latitude: 23.10229
      // }, {
      //   longitude: 113.324520,
      //   latitude: 23.21229
      // }],
      // color: "#FF0000DD",
      // width: 2,
      // dottedLine: true
    // }],
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 0,
        top: 0,
        width: 150,
        height: 150
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    this.setupLocation();
    return;
    console.log(e.controlId)
    wx.scanCode({
      success: function (res) {
        console.log(res);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'tomfriwel微信小程序',
      desc: '666',
      path: '/pages/map/map'
    }
  },
  setupLocation: function() {
    console.log('setupLocaion');
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        that.setData({
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          },
          // markers: [{
          //   id: "1",
          //   latitude: res.latitude,
          //   longitude: res.longitude,
          //   width: 50,
          //   height: 50,
          //   iconPath: "/images/location.png",
          //   title: "hehe"
          // }],
          // circles: [{
          //   latitude: res.latitude,
          //   longitude: res.longitude,
          //   color: '#FF0000DD',
          //   fillColor: '#7cb5ec88',
          //   radius: 3000,
          //   strokeWidth: 1
          // }]
        })
      }
    })
  }

})