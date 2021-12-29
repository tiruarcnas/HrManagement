const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello.....");
});
//route for login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "password Invalid" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});
//router for signup
router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      9;

      res.send({ message: "User already Registerd", email: email });
    } else {
      const user = new User({
        username,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Succesfully Registered,Please Login now.!" });
        }
      });
    }
  });
});

module.exports = router;

