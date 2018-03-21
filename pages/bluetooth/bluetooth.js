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
        devices:[],
        selectedDeviceId:null
    },
    onLoad: function (options) {
        this.open()
    },
    open: function () {
        const z = this
        z.onDeviceFound()
        z.onAdapterStateChange()
        z.onConnectionStateChange()

        wx.openBluetoothAdapter({
            success: function (res) {
                console.log(res)

                z.scan()
            },
            fail: function (res) {
                console.log(res)
            }
        })
    },
    scan: function() {
        this.setData({
            devices: []
        })
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
    connect: function(e) {
        let deviceId = e.currentTarget.dataset.deviceId

        wx.createBLEConnection({
            // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接 
            deviceId: deviceId,
            success: function (res) {
                console.log(res)
            }
        })
    },
    getAdapterState: function() {
        wx.getBluetoothAdapterState({
            success: function (res) {
                console.log(res)
            }
        })
    },
    onAdapterStateChange: function() {
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
                console.log(device.name)
                console.log(ab2hex(device.advertisData))
            }
        })
    },
    onConnectionStateChange: function() {
        const z = this
        wx.onBLEConnectionStateChange(function (res) {
            // 该方法回调中可以用于处理连接意外断开等异常情况
            console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
            if (res.connected) {
                z.getInfo(res.deviceId)
            }
        })
    },
    getInfo: function (deviceId) {
        wx.getBLEDeviceServices({
            // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接 
            deviceId: deviceId,
            success: function (res) {
                console.log('device services:', res.services)
                let services = res.services
                for (let index in services) {
                    let service = services[index]
                    wx.getBLEDeviceCharacteristics({
                        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
                        deviceId: deviceId,
                        // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                        serviceId: service.uuid,
                        success: function (res) {
                            console.log('device getBLEDeviceCharacteristics:', res.characteristics)
                        }
                    })
                }
            }
        })
    }
})