import { motion } from "framer-motion";

function AIInsightCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10"
    >
      <h2 className="text-xl font-semibold">AI Risk Prediction</h2>

      <p className="text-slate-300 mt-2">Shipment delay probability: 78%</p>

      <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "78%" }}
          transition={{ duration: 1 }}
          className="h-full bg-red-500"
        />
      </div>
    </motion.div>
  );
}

export default AIInsightCard;
