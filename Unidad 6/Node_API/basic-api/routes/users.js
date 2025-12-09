var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Somos MULWEB, la élité");
});

module.exports = router;
