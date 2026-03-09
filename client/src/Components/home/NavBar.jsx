import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserData } from "../../redux/userSlice";
import { RiVipDiamondFill } from "react-icons/ri";
import { serverUrl } from "../../App";

const NavBar = () => {


  const { userData } = useSelector((state) => state.user);
  // console.log(userData.user.credit)
  const credit = userData.user?.credits ?? 0;

  const [showCredit, setShowCredit] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });

      dispatch(setUserData(null));
      navigate("/auth");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" NavBar relative z-20 mx-4 sm:mx-6 mt-6 
      px-4 sm:px-8 py-3 sm:py-4 
      flex justify-between items-center"
    >
      {/* Logo */}

      <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
        <span className="bg-linear-to-r from-indigo-200 via-purple-300 to-pink-400 bg-clip-text text-transparent">
          Notexa
        </span>
        <span className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-md bg-linear-to-r from-indigo-500 to-purple-600 text-white">
          AI
        </span>
      </h2>

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Credits Bar*/}
        <div className="relative">
          <motion.div
            onClick={() => {
              setShowCredit(!showCredit);
              setShowProfile(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="credits-Bar flex items-center gap-2 
            px-3 sm:px-4 py-2 
            rounded-full bg-white/20 
            border border-white/20 text-white 
            text-sm sm:text-base 
            shadow-md cursor-pointer"
          >
            {/* Credits Bar diamond and credits*/}
            <span><RiVipDiamondFill className="text-[#0d77b8]" /></span>
            <span>{credit}</span>

          </motion.div>

          {/* credit open box */}
          <AnimatePresence>
            {showCredit && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 8 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="credit-Box absolute right-0 mt-6 
                w-56 sm:w-64 
                rounded-xl
                backdrop-blur-xl border border-white/10 
                p-4 text-white shadow-xl"
              >
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  Buy Credits
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mb-4">
                  Use credits to generate AI notes & PDFs
                </p>
                <button
                  onClick={() => {
                    setShowCredit(false);
                    navigate("/pricing");
                  }}
                  className="w-full py-2 rounded-lg 
                  bg-white text-black font-semibold text-sm"
                >
                  Buy More
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


        {/* Profile */}
        <div className="relative">
          <motion.div
            onClick={() => {
              setShowProfile(!showProfile);
              setShowCredit(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 
            flex items-center justify-center 
            rounded-full bg-white/20 
            text-white font-semibold cursor-pointer"
          >
            {userData?.user?.name?.charAt(0)?.toUpperCase() || "U"}
          </motion.div>

          {/* profile open box */}
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 8 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="profile-Box absolute right-0 mt-6 
                w-44 sm:w-52 
                rounded-xl bg-black/95 
                backdrop-blur-xl border border-white/10 
                p-3 text-white shadow-xl"
              >
                <MenuItem
                  text="History"
                  onClick={() => {
                    (setShowProfile(false), navigate("/history"));
                  }}
                />
                <MenuItem
                  text="Sign Out"
                  red
                  onClick={() => {
                    setShowProfile(false);
                    handleLogout();
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

function MenuItem({ text, onClick, red }) {
  return (
    <div
      onClick={onClick}
      className={`w-full text-left px-4 py-2 text-sm transition-colors rounded-lg cursor-pointer ${red
        ? "text-red-400 hover:bg-red-600/30"
        : "text-gray-300 hover:bg-gray-200/10"
        }`}
    >
      {text}
    </div>
  );
}

export default NavBar;
