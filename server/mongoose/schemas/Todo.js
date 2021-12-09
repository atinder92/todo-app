const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: [true, "title is required"] },
  description: { type: String, required: [true, "description is required"] },
  dueDate: { type: Date, default: Date.now},
  createdDate: { type: Date, default: Date.now },
  createdBy: Schema.Types.ObjectId
});

module.exports = mongoose.model("Todo", todoSchema);
