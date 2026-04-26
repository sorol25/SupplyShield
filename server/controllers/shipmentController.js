const db = require("../config/db");

// CREATE SHIPMENT
exports.createShipment = (req, res) => {
	const { title, origin, destination, status, distance, vendor_id } = req.body;

	const query = `
		INSERT INTO shipments 
		(title, origin, destination, status, distance, vendor_id)
		VALUES (?, ?, ?, ?, ?, ?)
	`;

	db.query(query, [title, origin, destination, status, distance, vendor_id], (err) => {
		if (err) return res.status(500).json(err);

		return res.json({ message: "Shipment created successfully" });
	});
};

// GET ALL SHIPMENTS
exports.getShipments = (req, res) => {
	db.query("SELECT * FROM shipments", (err, result) => {
		if (err) return res.status(500).json(err);

		return res.json(result);
	});
};

// UPDATE STATUS
exports.updateShipment = (req, res) => {
	const { status } = req.body;
	const { id } = req.params;

	db.query("UPDATE shipments SET status=? WHERE shipment_id=?", [status, id], (err) => {
		if (err) return res.status(500).json(err);

		return res.json({ message: "Updated successfully" });
	});
};

// DELETE SHIPMENT
exports.deleteShipment = (req, res) => {
	db.query("DELETE FROM shipments WHERE shipment_id=?", [req.params.id], (err) => {
		if (err) return res.status(500).json(err);

		return res.json({ message: "Deleted successfully" });
	});
};
