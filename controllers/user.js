const User = require("../models/user");
const createError = require("http-errors");

exports.addUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(200).json({
      message: "User added successfully",
    });
  } catch (error) {
    return next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};
