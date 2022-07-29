exports.successResponse = (result, message) => {
  const response = {
    success: true,
    message,
    data: result,
  };
  return response;
};
exports.failedResponse = (result, message) => {
  const response = {
    success: false,
    message,
    data: result,
  };
  return response;
};
