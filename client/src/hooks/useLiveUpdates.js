import { useEffect, useState } from "react";

export default function useLiveUpdates() {
  const [shipments, setShipments] = useState(120);
  const [alerts, setAlerts] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setShipments((prev) => prev + Math.floor(Math.random() * 3));
      setAlerts((prev) => Math.max(0, prev + (Math.random() > 0.7 ? 1 : -1)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { shipments, alerts };
}
