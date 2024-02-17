const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Chat-app")
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.log(err));
