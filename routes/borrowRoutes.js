const express = require("express");

const router = express.Router();

const { borrowBook, returnBook } = require("../controllers/borrowController");

const authenticate = require("../middleware/authMiddleware");

router.post(
    "/:bookId",
    authenticate,
    borrowBook,
);

router.post(
    "/return/:bookId",
    authenticate,
    returnBook
);

module.exports = router;