const { sign } = require('jsonwebtoken');

async function getAuthToken(user) {
    return sign({
        email: user.email
    }, '12345678');
}

module.exports = { getAuthToken };
