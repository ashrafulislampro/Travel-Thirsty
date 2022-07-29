const { ObjectId } = require("mongodb");
const dbClient = require("../db/dbClient");
const responseHelper = require("../utilities/responseHelper");

const hotelCollection = dbClient.db("travel-thirsty").collection("hotels");

exports.getAllHotelModel = async () => {
  const result = await hotelCollection.find({}).toArray();
  return responseHelper.successResponse(result, "Successfully get all hotels");
};

exports.getOneHotelModel = async (id) => {
  const filter = { _id: ObjectId(id) };
  const result = await hotelCollection.findOne(filter);
  return responseHelper.successResponse(result, "Successfully get one hotel");
};

exports.postHotelModel = async (data) => {
  const result = await hotelCollection.insertOne(data);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to post data");
  }
  return responseHelper.successResponse(result, "Successfully posted data");
};

exports.updateHotelModel = async (id, data) => {
  const filter = { _id: ObjectId(id) };
  const updatedDoc = {
    $set: data,
  };
  const result = await hotelCollection.updateOne(filter, updatedDoc);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to update data");
  }
  return responseHelper.successResponse(result, "Successfully updated data");
};

exports.deleteHotelModel = async (id) => {
  const filter = { _id: ObjectId(id) };
  const result = await hotelCollection.deleteOne(filter);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to delete data");
  }
  return responseHelper.successResponse(result, "Successfully deleted data");
};
