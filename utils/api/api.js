const network = require('./libs/network-wrap.js')
const loading = require('./libs/loading.js')
const routes = require('./api-routes.js')
const SERVER_URL = 'https://www.easy-mock.com/mock/5b9b22636a29d2427a5d90a6/apitest'

function makeUrl(apiUrl) {
    return SERVER_URL + apiUrl
}

function makeUrlMap(map) {
    let obj = {}
    for (let key in map) {
        let url = makeUrl(map[key])
        /**
         * options:{
         *      type, post, get, upload
         *      data,
         * }
         */
        obj[key] = function(options) {
            if (!options) {
                options = {}
            }
            if (!options.data) {
                options.data = {}
            }

            const app = getApp()
            if (app.globalData.loginData) {
                Object.assign(options.data, app.globalData.loginData)
            }
            let type = options.type || 'post'
            delete options.type

            // wx.showLoading, 如果不需要刻意去掉
            loading.show()
            Object.assign(options, {
                url,
                complete: function(res) {
                    loading.hide()
                    if (res.statusCode != 200 || res.statusCode == 200 && res.data.code && res.data.code != 1000) {
                        loading.error(res.data.data || res.data)
                    }
                }
            })
            return network[type](options)
        }
    }
    return obj
}

let exports = {
    serverUrl: SERVER_URL
}

for (let key in routes) {
    exports[key] = makeUrlMap(routes[key])
}

module.exports = exports