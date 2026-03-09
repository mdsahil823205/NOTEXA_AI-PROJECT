import React from "react";
import { motion } from "framer-motion";

const Toggle = ({ label, ToggleChecked, onToggleChange }) => {
  return (
    // pura toggle 
    <div
      className="flex items-center gap-3 cursor-pointer select-none"
      onClick={onToggleChange}
    >
      {/* toggle ka  background */}
      <motion.div
        className="w-10 sm:w-12 h-5 sm:h-6 flex items-center rounded-full p-1"
        animate={{
          backgroundColor: ToggleChecked ? "#3b82f6" : "#374151"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* toggle ka circle jo white wala hai  */}
        <motion.div
          className="w-4 h-4 bg-white rounded-full"
          animate={{
            x: ToggleChecked ? 23 : 0
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      {/* toggle label ka label jo likha hua hai   */}
      <span className="text-xs sm:text-sm text-gray-200">
        {label}
      </span>
    </div>
  );
};

export default Toggle;
