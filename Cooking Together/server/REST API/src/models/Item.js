import { Schema, model, Types } from "mongoose";

const itemSchema = new Schema({
  title: {
    type: String,
    required: [true, "Make is required!"],
    // minLength: [4, 'Make should be at least 4 characters long!']
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    // minLength: [10, 'Description should be at least 10 characters long!']
  },
  ingredients: {
    type: String,
    required: [true, "Model is required!"],
    // minLength: [4, 'Model should be at least 4 characters long!']
  },
  instructions: {
    type: String,
    required: [true, "Model is required!"],
    // minLength: [4, 'Model should be at least 4 characters long!']
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required!"],
    validate: [/^https?:\/\//, "Invalid image url!"],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdate: {
    type: Date,
    default: Date.now,
  },
  _ownerId: {
    type: Types.ObjectId,
    ref: "User",
  },
  usersList: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
});

const Item = model("Item", itemSchema);

export default Item;
