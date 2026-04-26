import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import {
  FiHome,
  FiTruck,
  FiBox,
  FiUsers,
  FiBell,
  FiBarChart2,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Sidebar({ onCollapseChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(collapsed);
    }
  }, [collapsed, onCollapseChange]);

  const menu = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { name: "Shipments", icon: <FiTruck />, path: "/shipments" },
    { name: "Inventory", icon: <FiBox />, path: "/inventory" },
    { name: "Vendors", icon: <FiUsers />, path: "/vendors" },
    { name: "Alerts", icon: <FiBell />, path: "/alerts" },
    { name: "Analytics", icon: <FiBarChart2 />, path: "/analytics" },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, width: collapsed ? 80 : 260 }}
      transition={{ duration: 0.4 }}
      className="h-screen fixed left-0 top-0 bg-white/5 backdrop-blur-3xl border-r border-white/10 p-4"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 text-sm text-slate-300"
      >
        {collapsed ? "Expand" : "Collapse"}
      </motion.button>

      <div className="mb-6">
        <h1 className="text-2xl font-bold">S{!collapsed && "upplyShield"}</h1>
        {!collapsed && <p className="text-slate-400 text-sm">Enterprise Control Panel</p>}
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="mb-6 flex items-center gap-2 text-sm text-slate-300"
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
        {!collapsed && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
      </motion.button>

      <div className="space-y-3">
        {menu.map((item, i) => {
          const active = location.pathname === item.path;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Sidebar;
