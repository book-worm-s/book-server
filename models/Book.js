const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    'book_id' : {
        type : 'string',
        required : true,
    },
    'book_name' : {
        type : 'string',
        required : true,
    },
    'isbn' : {
        type : 'string',
        required : true,
    },
    'author' : {
        type : 'string',
        required : true,
    },
    'author_id' : {
        type : 'string',
        required : false,
    },
    'book_url' : {
        type : 'string',
        required : true,
    },
    tags : [{
        type : 'string',
    }]
});

module.exports = mongoose.model('Book' , bookSchema);
