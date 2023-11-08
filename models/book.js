const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookschema);
module.exports = Book;
