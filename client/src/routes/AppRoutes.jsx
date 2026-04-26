import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import PageTransition from "../components/common/PageTransition";

function ModulePlaceholder({ title }) {
  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-slate-400">Module UI will be connected in the next step.</p>
      </div>
    </PageTransition>
  );
}

function AppRoutes() {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            token ? (
              <DashboardLayout>
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/shipments"
          element={
            token ? (
              <DashboardLayout>
                <ModulePlaceholder title="Shipments" />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/inventory"
          element={
            token ? (
              <DashboardLayout>
                <ModulePlaceholder title="Inventory" />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/vendors"
          element={
            token ? (
              <DashboardLayout>
                <ModulePlaceholder title="Vendors" />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/alerts"
          element={
            token ? (
              <DashboardLayout>
                <ModulePlaceholder title="Alerts" />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/analytics"
          element={
            token ? (
              <DashboardLayout>
                <ModulePlaceholder title="Analytics" />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
