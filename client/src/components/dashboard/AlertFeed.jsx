import { motion } from "framer-motion";

function AlertFeed() {
  const alerts = [
    "Shipment delayed in Dhaka route",
    "Vendor risk score increased",
    "Inventory below threshold",
    "AI detected anomaly in shipment flow",
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Live Alerts</h2>

      <div className="space-y-3">
        {alerts.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl bg-white/5 backdrop-blur-3xl border border-white/10"
          >
            {a}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AlertFeed;
