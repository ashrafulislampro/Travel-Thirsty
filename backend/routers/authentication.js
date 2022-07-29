const express = require("express");
const jwtToken = require("../utilities/jwtToken");
const { getIsAdmin } = require("../controller/userController");

const router = express.Router();

router.post("/get-token", jwtToken.getToken);

router.post("/get-admin", getIsAdmin);

module.exports = router;
