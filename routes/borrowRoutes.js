const express = require("express");

const router = express.Router();

const { borrowBook } = require("../controllers/borrowController");

const authenticate = require("../middleware/authMiddleware");

router.post(
    "/:bookId",
    authenticate,
    borrowBook
);

module.exports = router;