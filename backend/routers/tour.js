const express = require("express");

const tourController = require("../controller/tourPlanController");

const router = express.Router();

router.get("/all-tour-plan", tourController.getAllTourPlan);
router.get("/single-tour-plan", tourController.getOneTourPlan);

module.exports = router;
