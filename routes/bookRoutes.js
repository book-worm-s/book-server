const router = require('express').Router();


// Get Routes
router.get('/books');
router.get('/books/:book_id');

// Post Routes
router.post('books');

// Delete Routes
router.delete('/books/:book_id');

// Update Routes

router.put('/books/:book_id');
