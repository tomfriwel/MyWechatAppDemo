
function get(url, success, fail) {
    console.log(url)
    wx.request({
        method: 'GET',
        url: url,
        data: {},
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            console.log(res)
            if (res.statusCode == 200) {
                if (success) {
                    success(res.data)
                }
            }
            else {
                if (fail) {
                    fail(res)
                }
            }
        },
        fail: function (res) {
            console.log(res)
            if (fail) {
                fail(res)
            }
        }
    })
}


function post(url, data, extra, success, fail) {
    //http://blog.csdn.net/qq_30057189/article/details/74460997
    console.log(url)
    data = Object.assign(data, extra)
    console.log("post data:")
    console.log(data)
    wx.request({
        method: 'POST',
        url: url,
        data: data,
        header: {
            'content-type': 'application/x-www-form-urlencoded' //application/json
        },
        success: function (res) {
            console.log(res)
            // res.data.code = 1101
            if (res.statusCode == 200 && res.data.code == 1000) {
                if (success) {
                    success(res.data.data)
                }
            }
            else if (res.statusCode == 200 && res.data.code == 1101) {
                if (fail) {
                    fail(res)
                }
                // var app = getApp()
                // app.globalData.isLogin = 0

                // removeLoginData(function () {
                // wx.reLaunch({
                //     url: '/pages/me/me',
                // })
                // })
            }
            else if (res.statusCode == 200 && !res.data.code) {
                if (success) {
                    success(res.data)
                }
            }
            else {
                if (fail) {
                    fail(res)
                }
            }
        },
        fail: function (res) {
            console.log(res)
            if (fail) {
                fail(res)
            }
        }
    })
}

// function handleCode(data, callback) {
//     if (!(typeof(data.code) == "undefined") && data.code == 1000) {
//         callback(data.data)
//     }
// }

function upload(url, path, name, extra, success, progress, fail) {
    console.log(url)
    const uploadTask = wx.uploadFile({
        url: url,
        filePath: path,
        name: name,
        formData: extra,
        success: function (res) {
            console.log(res);

            var data = JSON.parse(res.data)
            if (res.statusCode == 200 && data.code == 1000) {
                if (success) {
                    success(data.data)
                }
            }
            else {
                if (fail) {
                    fail(data)
                }
            }

        },
        fail: function (res) {
            console.log(res)
            if (fail) {
                fail(res)
            }
        }
    })

    uploadTask.onProgressUpdate((res) => {
        console.log('上传进度', res.progress)
        console.log('已经上传的数据长度', res.totalBytesSent)
        console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        if (progress) (
            progress(res)
        )
    })
}

//user
function getIsLogin(success, fail) {
    wx.getStorage({
        key: 'loginData',
        success: function (res) {
            console.log(res)
            if (res.data) {
                if (success) {
                    success(res.data)
                }
            }
            else {
                if (fail) {
                    fail(res)
                }
            }
        },
        fail: function (res) {
            console.log(res)
            if (fail) {
                fail(res)
            }
        }
    })
}

function saveLoginData(data, success) {
    wx.setStorage({
        key: "loginData",
        data: data,
        success: function () {
            if (success) {
                success()
            }
        }
    })
}

function removeLoginData(callback) {
    wx.removeStorage({
        key: 'loginData',
        success: function (res) {
            console.log(res.data)
            if (callback) {
                callback()
            }
        }
    })
}

module.exports = {
    upload: upload,
    post: post
}