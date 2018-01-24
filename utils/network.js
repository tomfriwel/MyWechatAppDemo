

function get(options) {
    var url = options.url,
        success = options.success,
        fail = options.fail

    console.log("get url:" + url)
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

function post(options) {
    var url = options.url,
        data = options.data,
        extra = options.extra,
        success = options.success,
        fail = options.fail
    //http://blog.csdn.net/qq_30057189/article/details/74460997
    console.log("post url:" + url)
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
                    success(res.data)
                }
            }
            else if (res.statusCode == 200 && res.data.code == 1101) {
                if (fail) {
                    fail(res.data)
                }
            }
            else if (res.statusCode == 200 && res.data.code) {
                if (fail) {
                    fail(res.data)
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

function postJson(options) {
    var url = options.url,
        data = options.data,
        extra = options.extra,
        success = options.success,
        fail = options.fail
    //http://blog.csdn.net/qq_30057189/article/details/74460997
    console.log("post url:" + url)
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

function upload(options) {
    var url = options.url,
        path = options.path,
        name = options.name,
        // data = options.data,
        extra = options.extra,
        success = options.success,
        progress = options.progress,
        fail = options.fail

    console.log("upload url:" + url)
    const uploadTask = wx.uploadFile({
        url: url,
        filePath: path,
        name: name,
        formData: extra,
        success: function (res) {
            console.log(res);

            var data = res.data
            try {
                data = JSON.parse(res.data)
                console.log(data)
            }
            catch (e) {
                console.log(data)
                throw (e)
            }

            if (res.statusCode == 200 && data.code == 1000) {
                if (success) {
                    success(data)
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

module.exports = {
    get: get,
    post: post,
    upload: upload,
    postJson: postJson
}