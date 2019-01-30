if (process.env.NODE_ENV === 'production') {
    module.exports = require('./ceateStore.prod')
} else {
    module.exports = require('./ceateStore.dev')
}
