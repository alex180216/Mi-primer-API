const {config} = require('dotenv')
config()
module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 3000,
    LOCAL_URL: process.env.LOCAL_URL
}