const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contacts: [String],
});

const User = mongoose.model("User", UserSchema, "Users");
// const UserId = mongoose.model("UserId", UserSchema);

module.exports = User;
