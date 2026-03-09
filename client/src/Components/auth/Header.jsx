import React from 'react'
import { motion } from "motion/react";
const Header = () => {
  return (
   <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="header max-w-7xl mx-auto px-4 sm:px-6 py-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <span className="bg-linear-to-r from-indigo-200 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Notexa
          </span>
          <span className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-md bg-linear-to-r from-indigo-500 to-purple-600 text-white">
            AI
          </span>
        </h2>
      </motion.header>
  )
}

export default Header