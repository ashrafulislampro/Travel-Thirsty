const hotelModel = require("../models/hotelModel");

exports.getAllHotel = async (req, res) => {
  const response = await hotelModel.getAllHotelModel();
  res.send(response);
};

exports.getOneHotel = async (req, res) => {
  const id = req.query.id;
  const response = await hotelModel.getOneHotelModel(id);
  res.send(response);
};

exports.deleteHotel = async (req, res) => {
  const id = req.query.id;
  const response = await hotelModel.deleteHotelModel(id);
  res.send(response);
};

exports.updateHotel = async (req, res) => {
  const id = req.query.id;
  const data = req.body;
  const response = await hotelModel.updateHotelModel(id, data);
  res.send(response);
};

exports.addHotel = async (req, res) => {
  const data = req.body;

  const response = await hotelModel.postHotelModel(data);
  res.send(response);
};
