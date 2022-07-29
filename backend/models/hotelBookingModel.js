const { ObjectId } = require("mongodb");
const dbClient = require("../db/dbClient");
const responseHelper = require("../utilities/responseHelper");

const hotelBookingsCollection = dbClient
  .db("travel-thirsty")
  .collection("hotel-bookings");

exports.getAllBookedHotelModel = async () => {
  const result = await hotelBookingsCollection.find({}).toArray();
  return responseHelper.successResponse(
    result,
    "Successfully get all bookings"
  );
};

exports.getUserBookedHotelModel = async (email) => {
  const result = await hotelBookingsCollection
    .find({ user_email: email })
    .toArray();
  return responseHelper.successResponse(
    result,
    "Successfully get all bookings"
  );
};

exports.postHotelBookingModel = async (data) => {
  const result = await hotelBookingsCollection.insertOne(data);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to post data");
  }
  return responseHelper.successResponse(result, "Successfully posted data");
};

exports.deleteHotelBookingModel = async (id) => {
  const filter = { _id: id };
  const result = await hotelBookingsCollection.deleteOne(filter);
  if (result.deletedCount > 0) {
    return responseHelper.successResponse(result, "Successfully Delete data");
  }
  return responseHelper.failedResponse(result, "Failed to delete data");
};
