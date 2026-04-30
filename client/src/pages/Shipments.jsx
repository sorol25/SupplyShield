import { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

function Shipments() {
  const [shipments, setShipments] = useState([]);

  const fetchShipments = async () => {
    try {
      const res = await API.get("/shipments");
      setShipments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Shipment Intelligence Center
      </h1>

      <div className="grid gap-5">

        {shipments.map((shipment) => (
          <motion.div
            key={shipment.shipment_id}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-xl font-semibold">
                  {shipment.shipment_code}
                </h2>

                <p className="text-slate-400">
                  {shipment.origin} → {shipment.destination}
                </p>

                <p className="text-slate-400">
                  Vendor: {shipment.vendor_name || "N/A"}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-400">
                  Expected Delivery
                </p>

                <h3 className="font-semibold">
                  {shipment.expected_delivery?.split("T")[0]}
                </h3>

                <span className="text-indigo-400 text-sm">
                  {shipment.shipment_status}
                </span>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Shipments;