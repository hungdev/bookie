const User = require("../models/User");

const authSignup = async (req, res, next) => {
  const user = req.body;
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegEx = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
  const usernameRegEx = /^[a-zA-Z0-9!@#$%^&*()-_ ]{3,30}$/;
  if (!usernameRegEx.test(user.username)) {
    return res.status(400).json("Username is not in the correct format");
  }
  if (!emailRegEx.test(user.email)) {
    return res.status(400).json("Must a valid email");
  }
  if (!passwordRegEx.test(user.password)) {
    return res
      .status(400)
      .json("Password must contains letters, digits and at least 6 characters");
  }
  const existingUser = await User.findOne({ email: user.email });
  if (existingUser) {
    return res.status(400).json("That email already taken");
  }
  next();
};

module.exports = { authSignup };
