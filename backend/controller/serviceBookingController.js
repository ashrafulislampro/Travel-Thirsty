const serviceBookingModel = require("../models/serviceBookingModel");

exports.getAllBookedServices = async (req, res) => {
  const response = await serviceBookingModel.getAllBookedServiceModel();
  res.send(response);
};

exports.getUserBookedServices = async (req, res) => {
  const userEmail = req.query.email;
  console.log(userEmail);
  const response = await serviceBookingModel.getUserBookedServiceModel(
    userEmail
  );
  console.log(response);
  res.send(response);
};

exports.postServiceBookings = async (req, res) => {
  const bookedService = req.body;
  const response = await serviceBookingModel.postServiceBookingModel(
    bookedService
  );
  res.send(response);
};

exports.deleteServiceBookings = async (req, res) => {
  const id = req.query.id;
  const response = await serviceBookingModel.deleteServiceBookingModel(id);
  res.send(response);
};
