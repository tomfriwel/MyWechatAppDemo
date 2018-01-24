const SERVER_URL = 'https://api.douban.com/v2'

const book = {

}

function makeUrl(apiUrl) {
    return SERVER_URL + apiUrl
}

const movie = {
    'in_theaters': '/movie/in_theaters'
}

module.exports = {
    serverUrl: SERVER_URL,
    movie: {
        in_theaters: makeUrl(movie.in_theaters)
    }
}