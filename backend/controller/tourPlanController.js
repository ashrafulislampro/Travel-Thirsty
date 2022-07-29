const tourPlanModel = require("../models/tourPlanModels");

exports.getAllTourPlan = async (req, res) => {
  const response = await tourPlanModel.getTourPlanModel();
  res.send(response);
};

exports.getOneTourPlan = async (req, res) => {
  const id = req.query.id;
  const response = await tourPlanModel.getSingleTourPlanModel(id);
  res.send(response);
};

exports.postTourPlan = async (req, res) => {
  const postedTourPlan = req.body;
  const response = await tourPlanModel.postTourPlanModel(postedTourPlan);
  res.send(response);
};

exports.deleteTourPlan = async (req, res) => {
  const selectedId = req.query.id;
  const response = await tourPlanModel.deleteTourPlanModel(selectedId);
  res.send(response);
};

exports.updateTourPlan = async (req, res) => {
  const data = req.body;
  const id = req.query.id;
  const response = await tourPlanModel.updateTourPlanModel(id, data);
  res.send(response);
};
