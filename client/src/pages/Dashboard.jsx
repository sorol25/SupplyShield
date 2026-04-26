import { motion } from "framer-motion";
import { useContext } from "react";
import KPICard from "../components/dashboard/KPICard";
import AlertFeed from "../components/dashboard/AlertFeed";
import { FiTruck, FiAlertTriangle, FiBox } from "react-icons/fi";
import AIInsightCard from "../components/dashboard/AIInsightCard";
import ShipmentTimeline from "../components/dashboard/ShipmentTimeline";
import ShipmentMap from "../components/dashboard/ShipmentMap";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import useLiveUpdates from "../hooks/useLiveUpdates";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { shipments, alerts } = useLiveUpdates();
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === "admin";

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold">SupplyShield Intelligence Hub</h1>
        <p className="text-slate-400 mt-2">Live operational monitoring system</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <KPICard
          title="Active Shipments"
          value={shipments}
          icon={<FiTruck />}
          color="#1D4ED8"
        />

        <KPICard
          title="Risk Alerts"
          value={alerts}
          icon={<FiAlertTriangle />}
          color="#EF4444"
        />

        <KPICard
          title="Inventory Items"
          value={3420}
          icon={<FiBox />}
          color="#7C3AED"
        />

        <AIInsightCard />
      </div>

      <div className="mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10">
        {isAdmin ? (
          <div>
            <h2 className="text-xl font-semibold">Admin Analytics View</h2>
            <p className="text-slate-400 mt-2">
              Full operational visibility across shipments, vendors, and risk signals.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">Vendor Limited View</h2>
            <p className="text-slate-400 mt-2">
              Access scoped to your assigned shipment and compliance modules.
            </p>
          </div>
        )}
      </div>

      <ShipmentMap />

      <AnalyticsChart />

      <ShipmentTimeline />

      <AlertFeed />
    </div>
  );
}

export default Dashboard;
