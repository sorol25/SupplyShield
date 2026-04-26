import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      <Sidebar onCollapseChange={setCollapsed} />

      <motion.div
        animate={{ marginLeft: collapsed ? 80 : 260 }}
        transition={{ duration: 0.4 }}
        className="w-full p-8 min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default DashboardLayout;
