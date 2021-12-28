const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, default: "" },
  email: { type: String, required: '{PATH} is required', unique: true},
  password: { type: String, required: '{PATH} is required'},
});

module.exports = mongoose.model("User", userSchema);
