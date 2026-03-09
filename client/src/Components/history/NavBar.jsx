import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (

        <motion.nav
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 mt-6 
            px-6 py-4 
            max-w-7.5xl mx-auto
            flex justify-between items-center
            backdrop-blur-md bg-white/10 
            rounded-xl border border-white/20"
        >
            {/* Logo Section */}
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 cursor-pointer">
                <span className="bg-linear-to-r from-indigo-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Notexa
                </span>
                <span className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-md bg-linear-to-r from-indigo-500 to-purple-600 text-white">
                    AI
                </span>
            </h2>

            {/* Back Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className=" flex items-center gap-2 
                px-4 py-2 
                rounded-lg bg-white/20 
                border border-white/20 text-white 
                text-sm sm:text-base 
                shadow-md cursor-pointer capitalize
                backdrop-blur-sm"
            >
                ← Go Back
            </motion.button>
        </motion.nav>
    );
};

export default NavBar;