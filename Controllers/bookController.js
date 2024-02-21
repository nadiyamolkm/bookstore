const connection = require('../dbConnection')

const bookController = {

    createBook: async (req, res) => {
        // controller logic for adding a new book
        const { Title, Author, Description, Price, Genre } = req.body;

        try {
            // Insert the book into the 'books' table
            const result = await connection.promise().query(
                'INSERT INTO books (Title, Author, Description, Price, Genre) VALUES (?, ?, ?, ?, ?)',
                [Title, Author, Description, Price, Genre]
            );
                console.log(result)
            // Send a success response back to the client
            res.json({ message: 'Book inserted successfully', insertedId: result[0].insertId });
        } catch (err) {
            console.error('Error inserting book', err);
            // Send an error response back to the client
            res.status(500).json({ error: 'Error inserting book' });
        }
    },

    getAllBooks: async (req, res) => {
        // controller logic for getting all books
        console.log("===inside getAllBooks===");

        try {
            const [rows, fields] = await connection.promise().query("SELECT * FROM books");
            console.log(rows);
            // Send the result back to the client
            res.json(rows);
        } catch (err) {
            console.log("Error in fetching books", err);
            // Send an error response back to the client
            res.status(500).json({ error: "Error in fetching books" });
        }
    },

    getBookById: async (req, res) => {
        // Controller logic for getting  book details by ID

        const bookId = req.params.id;

        try {
            // Fetch the book by ID from the 'books' table
            const [rows, fields] = await connection.promise().query(
                'SELECT * FROM books WHERE id = ?',
                [bookId]
            );

            if (rows.length > 0) {
                // Send the book details back to the client
                res.json(rows[0]);
            } else {
                // If the book with the given ID is not found, send a 404 response
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (err) {
            console.error('Error fetching book by ID', err);
            // Send an error response back to the client
            res.status(500).json({ error: 'Error fetching book by ID' });
        }
    },

    updateBook: async (req, res) => {
        // Controller logic for updating a book by ID
        const bookId = req.params.id;
        const { Title, Author, Description, Price, Genre } = req.body;

        try {
            // Check if the book with the given ID exists
            const [checkRows, checkFields] = await connection.promise().query(
                'SELECT * FROM books WHERE id = ?',
                [bookId]
            );

            if (checkRows.length === 0) {
                // If the book with the given ID is not found, send a 404 response
                res.status(404).json({ error: 'Book not found' });
                return;
            }

            // Update the book by ID in the 'books' table
            const [updateRows, updateFields] = await connection.promise().query(
                'UPDATE books SET Title = ?, Author = ?, Description = ?, Price = ?, Genre = ? WHERE id = ?',
                [Title, Author, Description, Price, Genre, bookId]
            );

            // Send a success response back to the client
            res.json({ message: 'Book updated successfully' });
        } catch (err) {
            console.error('Error updating book by ID', err);
            // Send an error response back to the client
            res.status(500).json({ error: 'Error updating book by ID' });
        }
    },

    deleteBook: async (req, res) => {
        // Controller logic for deleting a book by ID
        const bookId = req.params.id;

        try {
            // Check if the book with the given ID exists
            const [checkRows, checkFields] = await connection.promise().query(
                'SELECT * FROM books WHERE id = ?',
                [bookId]
            );

            if (checkRows.length === 0) {
                // If the book with the given ID is not found, send a 404 response
                res.status(404).json({ error: 'Book not found' });
                return;
            }

            // Delete the book by ID from the 'books' table
            const [deleteRows, deleteFields] = await connection.promise().query(
                'DELETE FROM books WHERE id = ?',
                [bookId]
            );

            // Send a success response back to the client
            res.json({ message: 'Book deleted successfully' });
        } catch (err) {
            console.error('Error deleting book by ID', err);
            // Send an error response back to the client
            res.status(500).json({ error: 'Error deleting book by ID' });
        }
    },
};

module.exports = bookController;