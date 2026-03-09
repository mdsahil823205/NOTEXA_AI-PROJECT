import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { serverUrl } from "../../App";
import { setUserData } from "../../redux/userSlice";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logOut`, {
        withCredentials: true,
      });

      dispatch(setUserData(null));
      navigate("/auth");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="footer mx-4 sm:mx-6 mt-20 mb-6 
      rounded-2xl 
      bg-linear-to-br from-[#2b2b2b] to-[#1f1f1f] 
      backdrop-blur-2xl border border-white/10 
      px-6 sm:px-8 py-10 
      shadow-lg text-white"
    >
      {/* Main Grid */}
      <div
        className="max-w-7xl mx-auto 
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
      gap-10 text-center sm:text-left"
      >
        {/* Column 1 */}
        <motion.div
          whileHover={{ rotateX: 4, rotateY: -4 }}
          className="flex flex-col gap-4 transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start gap-2">
            Notexa
            <span className="bg-indigo-500 px-2 py-1 rounded-md text-xs sm:text-sm">
              AI
            </span>
          </h1>

          <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto sm:mx-0">
            Stop wasting hours on manual note-taking. Notexa AI turns complex topics
            into structured summaries and quick-revision guides in seconds.
          </p>

        </motion.div>

        {/* Column 2 */}
        <div>
          <h2 className="text-sm font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-sm">
            <li
              onClick={() => navigate("/notes")}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              Notes
            </li>

            <li
              onClick={() => navigate("/history")}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              History
            </li>

            <li
              onClick={() => navigate("/pricing")}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              Pricing
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-sm font-semibold mb-4">Support & Account</h2>

          <ul className="space-y-2 text-sm">
            <li
              onClick={() => navigate("/auth")}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              Sign In
            </li>

            <li
              onClick={handleLogout}
              className="text-gray-300 hover:text-red-400 transition cursor-pointer"
            >
              Sign Out
            </li>

            <li
              onClick={() => navigate("/pricing")}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              Add Credits
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-white/10 pt-6">
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Notexa AI.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
