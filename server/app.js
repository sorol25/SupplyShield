const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const shipmentRoutes = require("./routes/shipmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/shipments", shipmentRoutes);

app.get("/", (req, res) => {
	res.send("SupplyShield Backend Running");
});

module.exports = app;
