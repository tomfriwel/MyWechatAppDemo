const network = require('./network-wrap.js')
const SERVER_URL = 'https://www.easy-mock.com/mock/5b9b22636a29d2427a5d90a6/apitest'

const movie = {
    getList: '/movie/getList'
}
const login = {
    login: '/login/login'
}
const test = {
    test: '/test/test'
}

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
         *      success,
         *      fail,
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

            Object.assign(options, {
                url,
                complete: function(res) {}
            })
            return network[type](options)
        }
    }
    return obj
}

module.exports = {
    serverUrl: SERVER_URL,
    movie: makeUrlMap(movie),
    login: makeUrlMap(login),
    test: makeUrlMap(test),
}