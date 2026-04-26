import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold">SupplyShield Control Center</h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={logout}
          className="px-6 py-3 rounded-xl bg-red-500/20 border border-red-500/40"
        >
          Logout
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl mb-10"
      >
        <h2 className="text-2xl font-semibold">Welcome, {user?.full_name}</h2>
        <p className="text-slate-400">Role: {user?.role}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {["Shipments", "Vendors", "Inventory"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0px 10px 40px rgba(99,102,241,0.3)",
            }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-slate-400 mt-2">Live tracking system module</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
