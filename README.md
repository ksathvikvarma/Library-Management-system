# 📚 Library Management System

A RESTful Library Management System built with **Node.js, Express.js, MongoDB, and JWT Authentication**. This project provides secure user authentication, role-based authorization, book management, and book borrowing/return functionality.

## 🚀 Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Role-Based Authorization (Member & Librarian)

### Book Management

* Add Book
* Get All Books
* Get Book by ID
* Update Book
* Delete Book

### Borrowing System

* Borrow Book
* Return Book
* Automatic Available Copies Update
* Due Date Generation (14 Days)

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* dotenv

## 📁 Project Structure

```
library-management-system/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── server.js
├── package.json
└── README.md
```

## API Endpoints

### Authentication

| Method | Endpoint           | Access |
| ------ | ------------------ | ------ |
| POST   | /api/auth/register | Public |
| POST   | /api/auth/login    | Public |

### Books

| Method | Endpoint       | Access        |
| ------ | -------------- | ------------- |
| POST   | /api/books     | Librarian     |
| GET    | /api/books     | Authenticated |
| GET    | /api/books/:id | Authenticated |
| PUT    | /api/books/:id | Librarian     |
| DELETE | /api/books/:id | Librarian     |

### Borrow

| Method | Endpoint                   | Access |
| ------ | -------------------------- | ------ |
| POST   | /api/borrow/:bookId        | Member |
| POST   | /api/borrow/return/:bookId | Member |

## Installation

Clone the repository

```
git clone <repository-url>
```

Install dependencies

```
npm install
```

Create a `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server

```
npm run dev
```

## Future Improvements

* Borrow History
* Dashboard Statistics
* Search & Filter Books
* Pagination
* Fine Calculation
* Book Reservation

## Author

Sathvik Varma
