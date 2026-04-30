import { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

function Inventory() {
  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    try {
      const res = await API.get("/inventory");
      setInventory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Inventory Intelligence Center
      </h1>

      <div className="grid gap-5">

        {inventory.map((item) => {
          const lowStock =
            item.stock_quantity <= item.reorder_level;

          return (
            <motion.div
              key={item.inventory_id}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-xl font-semibold">
                    {item.product_name}
                  </h2>

                  <p className="text-slate-400">
                    SKU: {item.sku}
                  </p>

                  <p className="text-slate-400">
                    Warehouse: {item.warehouse_location}
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="text-2xl font-bold">
                    {item.stock_quantity}
                  </h3>

                  <span
                    className={`text-sm ${
                      lowStock
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {lowStock ? "Low Stock" : "Healthy"}
                  </span>
                </div>

              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}

export default Inventory;