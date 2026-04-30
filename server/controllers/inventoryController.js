const db = require("../config/db");


// CREATE INVENTORY ITEM
exports.createInventory = (req, res) => {
  const {
    product_name,
    sku,
    stock_quantity,
    reorder_level,
    warehouse_location
  } = req.body;

  const query = `
    INSERT INTO inventory (
      product_name,
      sku,
      stock_quantity,
      reorder_level,
      warehouse_location
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  const params = [
    product_name !== undefined ? product_name : null,
    sku !== undefined ? sku : null,
    stock_quantity !== undefined ? stock_quantity : null,
    reorder_level !== undefined ? reorder_level : null,
    warehouse_location !== undefined ? warehouse_location : null
  ];

  if (params.slice(0, 4).some((value) => value === null)) {
    return res.status(400).json({
      message: "Missing required inventory fields",
      params
    });
  }

  console.log("createInventory params:", params);

  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Inventory insert error:", err);
      return res.status(500).json({ message: "Error creating inventory item", error: err.message });
    }

    res.json({
      message: "Inventory item created successfully"
    });
  });
};


// GET ALL INVENTORY
exports.getInventory = (req, res) => {
  const query = `
    SELECT *
    FROM inventory
    ORDER BY last_updated DESC
  `;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};


// UPDATE STOCK QUANTITY
exports.updateInventory = (req, res) => {
  const { stock_quantity } = req.body;
  const { id } = req.params;

  const query = `
    UPDATE inventory
    SET stock_quantity = ?
    WHERE inventory_id = ?
  `;

  db.query(
    query,
    [stock_quantity, id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Inventory updated successfully"
      });
    }
  );
};


// DELETE INVENTORY ITEM
exports.deleteInventory = (req, res) => {
  const query = `
    DELETE FROM inventory
    WHERE inventory_id = ?
  `;

  db.query(
    query,
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Inventory item deleted successfully"
      });
    }
  );
};