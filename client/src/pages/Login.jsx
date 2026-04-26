import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login, token } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      if (!res?.data?.token || !res?.data?.user) {
        alert("Login response is missing token or user data");
        return;
      }

      login(res.data.user, res.data.token);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-[#111827] to-[#1E1B4B] px-6">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-luxury"
      >
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>

        <p className="text-slate-400 text-center mb-8">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-primary"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-primary"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-royal font-semibold hover:scale-[1.03] transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-slate-400">
          No account?{" "}
          <Link to="/register" className="text-primary font-medium">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
