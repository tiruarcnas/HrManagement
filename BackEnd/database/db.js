const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Admin:admin123@inventorymanagement.rohsy.mongodb.net/HRMS?retryWrites=true&w=majority"
);

const db = mongoose.connection;

// Check for DB connection
db.once("open", () => {
  console.log("Database Connected");
});
db.on("err", () => {
  console.log(err);
});
