var express = require("express");
const User = require("../model/user");
var router = express.Router();
let UserService = require("../service/user-service");

router.post("/login", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async function (req, res, next) {
  const user = new User(req.body.name, req.body.password, req.body.admin);
  const userRegistred = await UserService.register(user);
  res.status(201).json(userRegistred);
});

module.exports = router;
