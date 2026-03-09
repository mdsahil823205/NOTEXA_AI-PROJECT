import React from "react";
import { motion } from "framer-motion";

const Result = ({ loading }) => {
    return (
        <motion.div
            whileHover={!loading ? { scale: 1.02 } : {}}
            transition={{ duration: 0.1 }}
            className="mt-6 min-h-52 rounded-2xl backdrop-blur-xl border border-dashed border-gray-400/40 bg-white/5 shadow-inner flex flex-col justify-center items-center text-center px-4 sm:px-6"
        >
            {loading ? (
                <>
                    {/* Animated Spinner */}
                    <div className="w-12 h-12 border-4 border-gray-600 border-t-indigo-500 rounded-full animate-spin mb-4"></div>

                    <p className="text-sm sm:text-base md:text-lg text-gray-300 animate-pulse">
                        Generating Notes...
                    </p>
                </>
            ) : (
                <>
                    <span className="text-4xl mb-3">📘</span>

                    <p className="text-sm sm:text-base md:text-lg text-gray-400">
                        Generated notes will appear here
                    </p>
                </>
            )}
        </motion.div>
    );
};

export default Result;