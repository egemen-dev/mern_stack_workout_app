const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

// static register method
userSchema.statics.register = async function (username, email, password) {
  // validation
  if (!username || !email || !password) throw new Error("Invalid data");
  if (!validator.isEmail(email)) throw new Error("Email is invalid");
  if (!validator.isStrongPassword(password)) throw new Error("Password is weak");

  const emailExists = await this.findOne({ email });
  const usernameExists = await this.findOne({ username });

  if (emailExists) throw new Error("Email already exists");
  if (usernameExists) throw new Error("Username already exists");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw new Error("Invalid data");

  const user = await this.findOne({ email });

  if (!user) throw new Error("Email or password is incorrect");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Email or password is incorrect");

  return user;
};

module.exports = mongoose.model("User", userSchema);
