import { motion } from "framer-motion";

function ShipmentTimeline() {
  const steps = [
    "Order Placed",
    "Warehouse Processing",
    "In Transit",
    "Custom Clearance",
    "Delivered",
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Shipment Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-4 rounded-xl bg-white/5 backdrop-blur-3xl border border-white/10 text-center"
          >
            {step}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ShipmentTimeline;
