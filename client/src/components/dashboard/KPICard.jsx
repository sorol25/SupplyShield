import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

function KPICard({ title, value, icon, color }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [count, value]);

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: `0px 10px 40px ${color}40`,
      }}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-slate-300">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>

      <motion.h1 className="text-3xl font-bold mt-4">{displayValue}</motion.h1>
    </motion.div>
  );
}

export default KPICard;
