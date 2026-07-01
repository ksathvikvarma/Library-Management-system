const Book = require("../models/Book");
const Borrow = require("../models/Borrow");

const borrowBook = async (req, res) => {
    try {
        const userId = req.user.id;
        const { bookId } = req.params;

        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        if (book.availableCopies <= 0) {
            return res.status(400).json({
                success: false,
                message: "No copies available",
            });
        }

        // Set due date to 14 days from today
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);

        // Create borrow record
        await Borrow.create({
            user: userId,
            book: bookId,
            dueDate,
        });

        // Reduce available copies
        book.availableCopies -= 1;
        await book.save();

        return res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    borrowBook,
};