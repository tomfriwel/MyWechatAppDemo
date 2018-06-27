const app = getApp()
const apiconfig = require('./apiconfig.js')
const serverUrl = apiconfig.serverUrl

function makeUrl(apiUrl) {
    return serverUrl + apiUrl
}

function makeUrlMap(map) {
    let obj = {}
    for (let key in map) {
        obj[key] = makeUrl(map[key])
    }
    return obj
}

const wechat = {
    getUserInfo: '/wechat/getUserInfo',
    login:'/wechat/login',
    getDecodeEncryptedData:'/wechat/getDecodeEncryptedData',
    bindGroupAndUser: '/wechat/bindGroupAndUser',
    addUser: '/wechat/addUser',
    getGroupUserList: '/wechat/getGroupUserList',
    getAddCardConfig: '/wechatTest/getAddCardConfig'
}

module.exports = {
    serverUrl: serverUrl,
    wechat: makeUrlMap(wechat)
}
