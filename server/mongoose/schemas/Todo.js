import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  description: String,
  dueDate: Date,
  createdBy: Schema.Types.ObjectId,
  createdDate: { type: Date, default: Date.now }
});

module.exports = todoSchema;