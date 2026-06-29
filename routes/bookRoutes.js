const express = require("express");

const router = express.Router();

const { 
    addBook, 
    getAllBooks, 
    getBookById,
    updateBook,
    deleteBook,
} = require("../controllers/bookController");

const authenticate = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post(
    "/",
    authenticate,
    authorizeRoles("librarian"),
    addBook
);

router.get(
    "/",
    authenticate,
    getAllBooks
);

router.get(
    "/:id",
    authenticate,
    getBookById
);

router.put(
    "/:id",
    authenticate,
    authorizeRoles("librarian"),
    updateBook
);

router.delete(
    "/:id",
    authenticate,
    authorizeRoles("librarian"),
    deleteBook
);
module.exports = router;