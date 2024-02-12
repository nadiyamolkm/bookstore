const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController')

// Define routes and its specific controller fns
router.post('/books/add', bookController.createBook);

router.get('/books/getAll', bookController.getAllBooks);

router.get('/books/:id', bookController.getBookById);

router.put('/books/update/:id', bookController.updateBook);

router.delete('/books/delete/:id', bookController.deleteBook);

module.exports = router;