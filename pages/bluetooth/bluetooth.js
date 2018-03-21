// pages/bluetooth/bluetooth.js


// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
    var hexArr = Array.prototype.map.call(
        new Uint8Array(buffer),
        function (bit) {
            return ('00' + bit.toString(16)).slice(-2)
        }
    )
    return hexArr.join('');
}

Page({
    data: {
        devices:[]
    },
    onLoad: function (options) {
        this.open()
    },
    open: function () {
        const z = this
        wx.openBluetoothAdapter({
            success: function (res) {
                console.log(res)

                z.onDeviceFound()
                z.scan()
            },
            fail: function (res) {
                console.log(res)
            }
        })
    },
    scan: function() {
        // 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
        wx.startBluetoothDevicesDiscovery({
            success: function (res) {
                console.log(res)
            }
        })
    },
    stopScan: function() {
        wx.stopBluetoothDevicesDiscovery({
            success: function (res) {
                console.log(res)
            }
        })
    },
    close: function() {
        wx.closeBluetoothAdapter({
            success: function (res) {
                console.log(res)
            },
            fail: function (res) {
                console.log(res)
            }
        })
    },
    getState: function() {
        wx.getBluetoothAdapterState({
            success: function (res) {
                console.log(res)
            }
        })
    },
    onStateChange: function() {
        wx.onBluetoothAdapterStateChange(function (res) {
            console.log(`adapterState changed, now is`, res)
        })
    },
    onDeviceFound: function() {
        const z = this
        wx.onBluetoothDeviceFound(function (res) {
            let devices = z.data.devices
            let device = res.devices[0]
            let deviceIds = devices.map(function(item){
                return item.deviceId
            })
            let index = deviceIds.indexOf(device.deviceId)
            if (index == -1) {
                console.log('new device list has founded')
                devices.push(device)

                console.log(devices)
            }
            else {
                devices[index] = device
            }
            
            z.setData({
                devices: devices
            })

            if (device.hasOwnProperty('advertisData')) {
                console.log(ab2hex(device.advertisData))
            }
        })
    }
})