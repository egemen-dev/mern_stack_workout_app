const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createJWT = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "14d",
  });
};

// login user
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createJWT(user._id);

    res.status(200).json({ username: user.username, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// register user
const userRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.register(username, email, password);

    const token = createJWT(user._id);

    res.status(201).json({ username: user.username, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userLogin,
  userRegister,
};
