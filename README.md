# Bookstore Backend Application

This is a backend application for a bookstore, where users can perform CRUD operations (Create, Read, Update, Delete) on books. It uses MySQL as the database and Express for creating the server.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Endpoints](#endpoints)


## Installation

1. Clone the repository:
    git clone https://github.com/yourusername/bookstore-backend.git
2. navigate to directory : bookstore
    cd bookstore
3. execute "npm install"

## Usage
    npm start - to run the application

## Dependencies used
1. express
2. nodemon
3. body-parser
4. mysql2

## Configurations

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_DATABASE=bookstore

## EndPoints
GET /books/getAll: Get all books.
GET /books/:id: Get a book by ID.
POST /books/add: Add a new book.
PUT /books/update/:id: Update a book by ID.
DELETE /books/delete/:id: Delete a book by ID.



