const { ObjectId } = require("mongodb");
const dbClient = require("../db/dbClient");
const responseHelper = require("../utilities/responseHelper");

const tourPlanCollection = dbClient
  .db("travel-thirsty")
  .collection("tour-plan");

exports.postTourPlanModel = async (data) => {
  const result = await tourPlanCollection.insertOne(data);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to post data");
  }
  return responseHelper.successResponse(result, "Successfully added data");
};

exports.getTourPlanModel = async () => {
  const result = await tourPlanCollection.find({}).toArray();
  return responseHelper.successResponse(result, "Get data successfully");
};

exports.getSingleTourPlanModel = async (id) => {
  const filter = { _id: ObjectId(id) };
  const result = await tourPlanCollection.findOne(filter);
  return responseHelper.successResponse(
    result,
    "Successfully load single data"
  );
};

exports.deleteTourPlanModel = async (id) => {
  const filter = { _id: ObjectId(id) };
  const result = await tourPlanCollection.deleteOne(filter);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to delete data");
  }
  return responseHelper.successResponse(result, "Successfully deleted data");
};

exports.updateTourPlanModel = async (id, data) => {
  const filter = { _id: ObjectId(id) };
  const updatedDoc = {
    $set: data,
  };
  const result = await tourPlanCollection.updateOne(filter, updatedDoc);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to update data");
  }
  return responseHelper.successResponse(result, "Successfully updated data");
};
