const express = require("express");
const router = express.Router();

const {
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory
} = require("../controllers/inventoryController");

console.log("Inventory routes loaded");

router.use((req, res, next) => {
  console.log("Inventory router received:", req.method, req.path);
  next();
});

router.post("/", createInventory);
router.get("/", (req, res) => {
  console.log("GET /api/inventory called");
  getInventory(req, res);
});
router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);

module.exports = router;