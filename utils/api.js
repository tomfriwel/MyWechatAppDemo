const app = getApp()
const apiconfig = require('./apiconfig.js')
const serverUrl = apiconfig.serverUrl

function makeUrl(apiUrl) {
    return serverUrl + apiUrl
}

const wechat = {
    getUserInfo: '/wechat/getUserInfo',
    login:'/wechat/login',
    getDecodeEncryptedData:'/wechat/getDecodeEncryptedData',
    bindGroupAndUser: '/wechat/bindGroupAndUser',
    addUser:'/wechat/addUser',
    getGroupUserList: '/wechat/getGroupUserList'
}

module.exports = {
    serverUrl: serverUrl,
    wechat: {
        login: makeUrl(wechat.login),
        getDecodeEncryptedData: makeUrl(wechat.getDecodeEncryptedData),
        bindGroupAndUser: makeUrl(wechat.bindGroupAndUser),
        addUser: makeUrl(wechat.addUser),
        getGroupUserList: makeUrl(wechat.getGroupUserList)
    }
}
