const SERVER_URL = 'http://blog.tomfriwel.'

function makeUrl(apiUrl) {
    return SERVER_URL + apiUrl
}

const user = {
    getUserInfo: ''
}


module.exports = {
    serverUrl: SERVER_URL,
    user: {
        getUserInfo: makeUrl(user.getUserInfo)
    }
}
