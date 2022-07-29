const { ObjectId } = require("mongodb");
const dbClient = require("../db/dbClient");
const responseHelper = require("../utilities/responseHelper");

const userCollection = dbClient.db("travel-thirsty").collection("user");

exports.getOneUserModel = async (email) => {
  const filter = { email };
  const result = await userCollection.findOne(filter);
  return responseHelper.successResponse(result, "Successfully get user");
};

exports.getAllUserModel = async () => {
  const result = await userCollection.find({}).toArray();
  return responseHelper.successResponse(result, "Successfully get all users");
};

exports.updateUserModel = async (email, data) => {
  const filter = { email };
  const updatedDoc = {
    $set: data,
  };
  const result = await userCollection.updateOne(filter, updatedDoc);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to update user");
  }
  return responseHelper.successResponse(result, "Successfully updated user");
};

exports.createUserModel = async (data) => {
  const insertedUserEmail = data.email;
  const exists = await userCollection.findOne({ email: insertedUserEmail });
  if (!exists) {
    const result = await userCollection.insertOne(data);
    return responseHelper.successResponse(
      result,
      "Successfully created a user"
    );
  }
  return responseHelper.failedResponse(exists, "User already exists");
};

exports.makeAdminModel = async (email) => {
  const filter = { email };
  const user = await userCollection.findOne(filter);
  const { _id, ...rest } = user;
  const updatedUser = { ...rest, role: "admin" };
  const updatedDoc = {
    $set: updatedUser,
  };
  const result = await userCollection.updateOne(filter, updatedDoc);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to make user admin");
  }
  return responseHelper.successResponse(result, "Successfully made user admin");
};

exports.removeAdminModel = async (email) => {
  const filter = { email };
  const user = await userCollection.findOne(filter);
  const { _id, ...rest } = user;
  const updatedUser = { ...rest, role: "not-admin" };
  const updatedDoc = {
    $set: updatedUser,
  };
  const result = await userCollection.updateOne(filter, updatedDoc);
  if (!result.acknowledged) {
    return responseHelper.failedResponse(result, "Failed to remove admin");
  }
  return responseHelper.successResponse(result, "Successfully remove admin");
};

exports.deleteUserModel = async (email) => {
  const result = await userCollection.deleteOne({ email });
  return responseHelper.successResponse(result, "Successfully delete user");
};

exports.getAdmin = async (email) => {
  const user = await userCollection.findOne({ email });
  if (user && user.role === "admin") {
    return { success: true, isAdmin: true };
  }
  return { success: false, isAdmin: false };
};
