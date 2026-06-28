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

module.exports = {
    addBook,
};