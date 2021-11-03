const Book = require('../models/Book');
var mongoose = require('mongoose');

const postBooks = async (req, res) => {
    try {
        const body = req.body;
        const bookData = {
            book_name : body.book_name,
            isbn : body.isbn,
            author : body.author,
            author_id : body.author_id,
            book_url : body.book_url,
            tags : body.tags,
            book_id : mongoose.Types.ObjectId('4edd40c86762e0fb12000003')
        };

        const newBook = new Book({
            _id : bookData.book_id,
            book_id : bookData.book_id,
            isbn : bookData.isbn,
            book_name : bookData.book_name,
            book_url : bookData.book_url,
            author : bookData.author,
            author_id : bookData.author_id,
            tags : bookData.tags,
        });

        await newBook.save();

        return res.status(200).json({
            message : 'Book saved successfully',
            book : newBook,
        });

    }
    catch (err){
        console.log('Server Side Error');
        return res.status(500).json({
            message : 'Server Side Error'
        });
    }
};

const getBooks = async(req , res) => {
    try {
        console.log(req.body);
    }
    catch (err){
        console.log('Server Side Error');
        return res.status(500).json({
            message : 'Server Side Error'
        });
    }
};

const getBook = async(req , res) => {
    try {
        console.log(req.body);
    }
    catch (err){
        console.log('Server Side Error');
        return res.status(500).json({
            message : 'Server Side Error'
        });
    }
};

const deleteBook = async(req , res) => {
    try {
        console.log(req.body);
    }
    catch (err){
        console.log('Server Side Error');
        return res.status(500).json({
            message : 'Server Side Error'
        });
    }
};

const updateBook = async(req , res) => {
    try {
        console.log(req.body);
    }
    catch (err){
        console.log('Server Side Error');
        return res.status(500).json({
            message : 'Server Side Error'
        });
    }
};


module.exports = {
    postBooks,
    getBooks,
    getBook,
    deleteBook,
    updateBook,
};
