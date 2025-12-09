const books = [{ id: 1, title: "Book A", pages: 12 }];
const crypto = require("crypto");

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find((b) => b.id === id);
}

function addBook(book) {
  book.id = crypto.randomUUID();
  books.push(book);
  return book;
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
};
