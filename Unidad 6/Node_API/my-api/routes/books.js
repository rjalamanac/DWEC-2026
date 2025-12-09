var express = require("express");
var router = express.Router();
const booksService = require("../services/booksService");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(booksService.getAllBooks());
});

router.post("/", function (req, res, next) {
  const newBook = booksService.addBook(JSON.parse(req.body));
  res.json(newBook);
});

module.exports = router;
