'use strict';

module.exports = {
    port: 7788,
    dbUrl: 'mongodb://localhost:27017/legao',
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000,
        }
    }
}
