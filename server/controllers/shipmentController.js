const db = require("../config/db");


// CREATE SHIPMENT
exports.createShipment = (req, res) => {
  const {
    vendor_id,
    shipment_code,
    origin,
    destination,
    expected_delivery,
    actual_delivery,
    shipment_status,
    delay_risk_score
  } = req.body;

  const query = `
    INSERT INTO shipments (
      vendor_id,
      shipment_code,
      origin,
      destination,
      expected_delivery,
      actual_delivery,
      shipment_status,
      delay_risk_score
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    vendor_id !== undefined ? vendor_id : null,
    shipment_code !== undefined ? shipment_code : null,
    origin !== undefined ? origin : null,
    destination !== undefined ? destination : null,
    expected_delivery !== undefined ? expected_delivery : null,
    actual_delivery !== undefined ? actual_delivery : null,
    shipment_status !== undefined ? shipment_status : 'pending',
    delay_risk_score !== undefined ? delay_risk_score : 0
  ];

  if (params.some((value) => value === undefined)) {
    return res.status(400).json({
      message: "Missing required shipment parameter",
      params
    });
  }

  console.log("createShipment params:", params);

  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Shipment insert error:", err);
      return res.status(500).json({ message: "Error creating shipment", error: err.message });
    }

    res.json({
      message: "Shipment created successfully"
    });
  });
};


// GET ALL SHIPMENTS
exports.getShipments = (req, res) => {
  const query = `
    SELECT
      s.*,
      v.vendor_name
    FROM shipments s
    LEFT JOIN vendors v
      ON s.vendor_id = v.vendor_id
    ORDER BY s.created_at DESC
  `;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};


// UPDATE SHIPMENT STATUS
exports.updateShipmentStatus = (req, res) => {
  const { shipment_status } = req.body;
  const { id } = req.params;

  const query = `
    UPDATE shipments
    SET shipment_status = ?
    WHERE shipment_id = ?
  `;

  db.query(
    query,
    [shipment_status, id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Shipment status updated successfully"
      });
    }
  );
};


// DELETE SHIPMENT
exports.deleteShipment = (req, res) => {
  const query = `
    DELETE FROM shipments
    WHERE shipment_id = ?
  `;

  db.query(
    query,
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Shipment deleted successfully"
      });
    }
  );
};