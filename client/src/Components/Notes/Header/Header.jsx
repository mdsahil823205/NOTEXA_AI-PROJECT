import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  // console.log(userData.user.credit)
  const credit = userData.user?.credits ?? 0;
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="NavBar rounded-2xl bg-linear-to-br  from-black/90 via-black/80 to-black/90 backdrop-blur-xl border border-white/10 px-6 py-4 shadow-2xl flex md:items-center justify-between gap-4 flex-col md:flex-row"
    >
      <div
        className=" cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <span className="bg-linear-to-r from-indigo-200 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Notexa
          </span>
          <span className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-md bg-linear-to-r from-indigo-500 to-purple-600 text-white">
            AI
          </span>
        </h2>
      </div>
      <div className=" flex items-center gap-4 flex-wrap">
        <motion.button
          onClick={() => {
            navigate("/pricing");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 border border-white/20 text-white text-sm sm:text-base shadow-md cursor-pointer"
        >
          <span>💎</span>
          <span>{credit}</span>
        </motion.button>
        <button
          onClick={() => {
            navigate("/history");
          }}
          className="px-4 py-3 text-sm font-medium bg-white/10  border border-white/20 text-white rounded-full flex items-center gap-2 hover:bg-white/20 transition"
        >
          📘 Your Notes
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
