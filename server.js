require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Library Management API Running");
});

const PORT = process.env.PORT || 5000;

// Start Server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();