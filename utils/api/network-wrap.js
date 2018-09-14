const network = require('./network.js')
const promisify = require('./promisify.js')

module.exports = {
    get: promisify(network.get),
    post: promisify(network.post),
    upload: promisify(network.upload),
    postJson: promisify(network.postJson),
}