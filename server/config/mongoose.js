var mongoose = require('mongoose'),
    contactModel = require('../models/contact');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('reactit_project db opened');
    });

    contactModel.CreateDefaultContacts();
}