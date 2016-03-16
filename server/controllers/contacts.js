var Contact = require('mongoose').model('Contact');

exports.getContacts = function (req, res) {
    Contact.find({}).exec(function (error, collection) {
        res.send(collection);
    })
}

exports.getContactById = function(req, res) {
    Contact.findOne({_id:req.params.id}).exec(function(err, contact) {
        res.send(contact);
    })
}