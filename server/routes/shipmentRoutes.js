const express = require("express");
const router = express.Router();

const {
	createShipment,
	getShipments,
	updateShipment,
	deleteShipment,
} = require("../controllers/shipmentController");

router.post("/", createShipment);
router.get("/", getShipments);
router.put("/:id", updateShipment);
router.delete("/:id", deleteShipment);

module.exports = router;
