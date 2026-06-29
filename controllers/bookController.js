const Book = require("../models/Book");

const addBook = async (req, res) => {
    try{
        const {
            title,
            author,
            isbn,
            category,
            totalCopies,
            availableCopies,
            description,
        } = req.body;

        const existingBook = await Book.findOne({ isbn });
        
        if (existingBook) {
            return res.status(400).json({
                success: false,
                message: "Book already exists",
            });
        }
        
        await Book.create({
            title,
            author,
            isbn,
            category,
            totalCopies,
            availableCopies,
            description,
        });

        return res.status(201).json({
            success: true,
            message: "Book added successfully",
        });
    } catch(error){
        return res.status(500).json({
                success: false,
                message: error.message,
            });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        return res.status(200).json({
            success: true,
            books,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getBookById = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        return res.status(200).json({
            success: true,
            book,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book updated successfully",
            book: updatedBook,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};