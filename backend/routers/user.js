const express = require("express");
const userController = require("../controller/userController");
const hotelBookingController = require("../controller/hotelBookingController");
const serviceBookingController = require("../controller/serviceBookingController");

const router = express.Router();

router.get("/single-user", userController.getSingleUser);
router.post("/add-user", userController.createUser);
router.patch("/update-single-user", userController.updateUser);

// bookings
router.get("/get-user-bookedHotel", hotelBookingController.getUserBookedHotel);
router.get(
  "/get-user-bookedService",
  serviceBookingController.getUserBookedServices
);
router.post("/post-hotel-booking", hotelBookingController.postHotelBookings);
router.post(
  "/post-service-booking",
  serviceBookingController.postServiceBookings
);

router.delete(
  "/delete-service-booking",
  serviceBookingController.deleteServiceBookings
);
router.delete(
  "/delete-hotel-booking",
  hotelBookingController.deleteHotelBookings
);

module.exports = router;
