import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import { SALT_ROUNDS } from "../config/constans.js";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
    //minLength: [10, 'Email should be at least 10 characters long!']
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
    //minLength: [10, 'Email should be at least 10 characters long!']
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    //minLength: [4, 'Password should be at least 4 characters long!']
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdate: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

  this.password = hash;
});

const User = model("User", userSchema);

export default User;
