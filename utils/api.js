const app = getApp()
const apiconfig = require('./apiconfig.js')
const serverUrl = apiconfig.serverUrl

function makeUrl(apiUrl) {
    return serverUrl + apiUrl
}

const wechat = {
    getUserInfo: '/wechat/getUserInfo',
    login:'/wechat/login',
    getDecodeEncryptedData:'/wechat/getDecodeEncryptedData'
}

module.exports = {
    serverUrl: serverUrl,
    wechat: {
        login: makeUrl(wechat.login),
        getDecodeEncryptedData: makeUrl(wechat.getDecodeEncryptedData)
    }
}
