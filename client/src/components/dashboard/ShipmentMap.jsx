import { motion } from "framer-motion";

function ShipmentMap() {
  return (
    <div className="mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Live Shipment Route</h2>

      <div className="relative h-40 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl overflow-hidden">
        <motion.div
          animate={{ x: [0, 200, 400] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default ShipmentMap;
