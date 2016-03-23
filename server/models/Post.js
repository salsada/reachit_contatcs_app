var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {type: String, required:'{PATH} is required'},
    content : {type: String, required: '{PATH is required}', maxlength: [255, '{PATH} max size is 255 characters.']},
    isPublic: {type: Boolean, default: false}
});

var Post = mongoose.model('Post', postSchema);

function createDefaultPosts () {
    Post.find({}).exec(function (error, collection){
        if(collection.length === 0) {
            Post.create(
                {
                    title: 'Open Source Web Development with the MEAN Stack',
                    content: 'Learn how to develop web sites like this one using the MEAN stack. Look for REACH-IT at www.cpcc.edu',
                    isPublic: true
                }
            );
            Post.create(
                {
                    title: 'Node.js in 30 Minutes with Hunter Loftis',
                    content: ' build and release a node app to production',
                    isPublic: true
                }
            );
        }
    })
}

exports.createdDefaultPosts = createDefaultPosts;