const express = require("express");
const tourController = require("../controller/tourPlanController");
const userController = require("../controller/userController");
const hotelController = require("../controller/hotelController");
const hotelBookingController = require("../controller/hotelBookingController");

const router = express.Router();

// handle tour plans
router.post("/post-tour-plan", tourController.postTourPlan);
router.patch("/update-tour-plan", tourController.updateTourPlan);
router.delete("/delete-tour-plan", tourController.deleteTourPlan);

// handle users
router.get("/get-all-user", userController.getAllUsers);
router.patch("/make-user-admin", userController.makeAdmin);
router.delete("/delete-one-user", userController.deleteUser);
router.patch("/remove-admin", userController.removeAdmin);

// handle hotels
router.post("/add-hotel", hotelController.addHotel);
router.patch("/update-hotel", hotelController.updateHotel);
router.delete("/delete-hotel", hotelController.deleteHotel);

// handle bookings
router.get("/get-all-bookedHotel", hotelBookingController.getAllBookedHotel);

module.exports = router;
