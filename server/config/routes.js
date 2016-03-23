var contacts = require('../controllers/contacts'),
    posts = require('../controllers/posts'),
    mongoose = require('mongoose'),
    Contact = mongoose.model('Contact');


module.exports = function (app) {

    app.get('/api/contacts', contacts.getContacts);
    app.get('/api/contacts/:id', contacts.getContactById);
    app.get('/api/posts', posts.getPosts);

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function(req, res) {
        res.render('index');
    });
}