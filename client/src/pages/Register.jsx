import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/auth/register", form);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-[420px] p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-center mb-2"
        >
          Create Account
        </motion.h1>

        <p className="text-center text-slate-400 mb-8">Join SupplyShield Intelligence System</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["full_name", "email", "password"].map((field, i) => (
            <motion.input
              key={i}
              name={field}
              type={field === "password" ? "password" : "text"}
              placeholder={field}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition"
            />
          ))}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(124,58,237,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
          >
            Create Account
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Register;
