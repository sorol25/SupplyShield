const express = require("express");
const router = express.Router();
const { predictDelay } = require("../controllers/aiController");

router.post("/predict", predictDelay);

module.exports = router;