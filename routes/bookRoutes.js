const express = require("express");

const router = express.Router();

const { addBook } = require("../controllers/bookController");

const authenticate = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post(
    "/",
    authenticate,
    authorizeRoles("librarian"),
    addBook
);

module.exports = router;