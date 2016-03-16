var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    email: {type: String, requires: '{PATH} is required!', unique: true}
});

var Contact = mongoose.model('Contact', contactSchema);

function CreateDefaultContacts () {
    Contact.find({}).exec(function (err, collection){
        if(collection.length === 0) {
            Contact.create({firstName: 'Alberto', lastName: 'Botero', email: 'alberto.botero@cpcc.edu'});
            Contact.create({firstName: 'Samuel', lastName: 'Botero', email: 'samuel.botero@cpcc.edu'});
            Contact.create({firstName: 'David', lastName: 'Botero', email: 'david.botero@cpcc.edu'});
        }
    })
}