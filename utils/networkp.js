const network = require('./network.js')
const promisify = require('./promisify.js')

module.exports = {
    post: promisify(network.post),
    get: promisify(network.get),
}