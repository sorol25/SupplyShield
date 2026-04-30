const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const shipmentRoutes = require("./routes/shipmentRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/shipments", shipmentRoutes);
app.use("/api/inventory", inventoryRoutes);

console.log("Routes mounted");

app.get("/", (req, res) => {
	res.send("SupplyShield Backend Running");
});

module.exports = app;
