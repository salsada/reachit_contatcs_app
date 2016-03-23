var mongoose = require('mongoose'),
    contactModel = require('../models/Contact'),
    postModel = require('../models/Post');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('reachit_project db opened');
    });

    contactModel.createDefaultContacts();
    postModel.createdDefaultPosts();
};