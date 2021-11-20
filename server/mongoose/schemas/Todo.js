const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  dueDate: { type: Date, default: Date.now},
  createdDate: { type: Date, default: Date.now },
  createdBy: Schema.Types.ObjectId
});

module.exports = mongoose.model("Todo", todoSchema);
