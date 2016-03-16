var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://admin:Passw0rd@ds064188.mlab.com:64188/reachit_project',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:Passw0rd@ds064188.mlab.com:64188/reachit_project',
        port: process.env.PORT || 80
    }
}