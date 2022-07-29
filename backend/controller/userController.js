const userModel = require("../models/userModel");

exports.getSingleUser = async (req, res) => {
  const email = req.query.email;
  const response = await userModel.getOneUserModel(email);
  res.send(response);
};

exports.getAllUsers = async (req, res) => {
  const response = await userModel.getAllUserModel();
  res.send(response);
};

exports.updateUser = async (req, res) => {
  const email = req.query.email;
  const data = req.body;
  const response = await userModel.updateUserModel(email, data);
  res.send(response);
};

exports.createUser = async (req, res) => {
  const user = req.body;
  const response = await userModel.createUserModel(user);
  res.send(response);
};

exports.makeAdmin = async (req, res) => {
  const email = req.query.email;
  const response = await userModel.makeAdminModel(email);
  res.send(response);
};
exports.removeAdmin = async (req, res) => {
  const email = req.query.email;
  const response = await userModel.removeAdminModel(email);
  res.send(response);
};

exports.deleteUser = async (req, res) => {
  const email = req.query.email;
  const response = await userModel.deleteUserModel(email);
  res.send(response);
};

exports.getIsAdmin = async (req, res) => {
  const email = req.body.email;
  const response = await userModel.getAdmin(email);
  res.send(response);
};
