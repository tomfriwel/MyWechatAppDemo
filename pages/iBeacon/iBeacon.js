// pages/iBeacon/iBeacon.js
Page({
    data: {

    },
    onLoad: function (options) {
    },
    scan: function () {
        wx.startBeaconDiscovery({
            uuids: ['23A01AF0-232A-4518-9C0E-323FB773F5EF', '23A01AF0-232A-4518-9C0E-323FB773F5EF'],
            // complete(res) {
            //     console.log(res)
            // },
            success(res) {
                console.log("success:")
                console.log(res)
                console.log(res.beacons)
            }
        })
    }
})