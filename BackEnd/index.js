import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello.....");
});

//connecting database
mongoose.connect(
  "mongodb+srv://Admin:admin123@inventorymanagement.rohsy.mongodb.net/HRMS?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DataBase connected");
  }
);

//userSchema 
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//menuSchema
const menuSchema = new mongoose.Schema({
  item: String,
  quantity:Number,
})
const Menu = new mongoose.model("Menu", menuSchema);
//Routes
//menu api
app.post("/items", (req, res) => {
  const { item, quantity } = req.body;
  const menu = new Menu({
    item,
    quantity
  });
  menu.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Order has been placed" });
    }
  });
})
  //get all the details
app.get("/getitem", function (req, res) {
  const users = Menu.find({}, function (err, users) {
    if (err) {
      console.log(err);
      res.json({ msg: "failed" });
    } else {
      res.json(users);
    }
  });
});
//get indivudal
app.get("/:id", function (req, res) {
  Menu.findById(req.params.id, function (err, user) {
    res.json(user);
  });
});
//update
app.put("/update/:id", function (req, res) {
  Menu.findById(req.params.id, function (err, user) {
    if (!user) res.status(404).send("data is not found");
    else {
      user.item = req.body.item;
      user.quantity = req.body.quantity;

      user
        .save()
        .then((user) => {
          res.json({ msg: "success" });
        })
        .catch((err) => {
          res.json({ msg: "falied" });
        });
    }
  });
});
//delete
app.delete("/:id",  (req, res) =>{
  console.log(req.params.id)
  const menu = menuSchema;
  const result =  menu.deleteOne({ _id:req.params.id });
res.send(result)
});


//api for login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

//api for register
app.post("/register", (req, res) => {
  const { firstName,lastName, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        firstName,
        lastName,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});
//productSchema 
const employeeSchema = new mongoose.Schema({
  employeeName: String,
  employeeId:String,
  dateOfBirth: Number,
  bankDetails: String,
  department: String,
  bloodGroup:String,
  designation:String
});
const Employee = new mongoose.model("Employee", employeeSchema);
//get request


//API Routing 
app.post('/employeedetails', (req, res) => { 
  const { employeeName, employeeId,dateOfBirth,bankDetails,department,bloodGroup,designation } = req.body;
   const employee = new Employee({
     employeeName,
     employeeId,
     bankDetails,
     department,
     bloodGroup,
     designation
   });
   employee.save((err) => {
     if (err) {
       res.send(err);
     } else {
       res.send({ message: "employee Details saved" });
     }
   });
})

//server running  in the port 
app.listen(9000, () => {
  console.log("Server Running in port 9000");
});

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// // Initialize app
// const app = express();
// app.use(cors());

// app.use(express.json());

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// //APi
// const routes = require("./routes/router");
// app.use("/", routes);

// //DB connection
// mongoose.connect(
//   "mongodb+srv://Admin:admin123@inventorymanagement.rohsy.mongodb.net/HRMS?retryWrites=true&w=majority"
// );

// const db = mongoose.connection;

// // Check for DB connection
// db.once("open", () => {
//   console.log("Database Connected");
// });
// db.on("err", () => {
//   console.log(err);
// });

// //userSchema or model
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
// });

// const Data = new mongoose.model("Data", userSchema);
// //Routes
// app.get("/", (req, res) => {
//   res.send("Hello.....");
// });
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   User.findOne({ email: email }, (err, user) => {
//     if (user) {
//       if (password === user.password) {
//         res.send({ message: "Login Successful", user: user });
//       } else {
//         res.send({ message: "password Invalid" });
//       }
//     } else {
//       res.send({ message: "User not registered" });
//     }
//   });
// });
// //router for signup
// app.post("/signup", (req, res) => {
//   const { username, email, password } = req.body;
//   User.findOne({ email: email }, (err, user) => {
//     if (user) {
//       res.send({ message: "User already Registerd", email: email });
//     } else {
//       const user = new User({
//         username,
//         email,
//         password,
//       });
//       user.save((err) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send({ message: "Succesfully Registered,Please Login now.!" });
//         }
//       });
//     }
//   });
// });
// // Schema Created on Items list
// const productSchema = new mongoose.Schema({
//   productname: String,
//   quantity: Number,
//   description: String,
//   price: Number,
// });
// const ProductDetails = new mongoose.model("ProductDetails", userSchema);
// //API
// app.post("/productdetails", (req, res) => {
//    const productdetails = new ProductDetails({
//      productname,
//      quantity,
//      description,
//      price,
//    });
//    productdetails.save((err) => {
//      if (err) {
//        res.send(err);
//      } else {
//        res.send({ message: "productdetails saved.!" });
//      }
//    });
//  })

// app.listen(9000, () => {
//   console.log("Backend Started at port 9000");
// });

// // Load express module
// const express = require('express');
// // Initialize app
// const app = express();

// const mongoose = require('mongoose');
// mongoose.connect(
//   'mongodb+srv://tiru:tirubanu@test.rdgo4.mongodb.net/Pricing?retryWrites=true&w=majority'
// );

// const db = mongoose.connection;

// // Check for DB connection
// db.once('open', function () {
//   console.log('Connected to MongoDB successfully...............!');
// });
// db.on('err', function () {
//   console.log(err);
// });

// app.use(express.json());

// const cors = require('cors');
