const express = require("express");
const hotelController = require("../controller/hotelController");

const router = express.Router();

router.get("/get-all-hotel", hotelController.getAllHotel);
router.get("/get-one-hotel", hotelController.getOneHotel);

module.exports = router;
