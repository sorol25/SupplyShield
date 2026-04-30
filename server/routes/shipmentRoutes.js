const express = require("express");
const router = express.Router();

const {
  createShipment,
  getShipments,
  updateShipmentStatus,
  deleteShipment
} = require("../controllers/shipmentController");

router.post("/", createShipment);
router.get("/", getShipments);
router.put("/:id", updateShipmentStatus);
router.delete("/:id", deleteShipment);

module.exports = router;