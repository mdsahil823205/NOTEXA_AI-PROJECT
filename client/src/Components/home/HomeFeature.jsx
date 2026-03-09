import React from 'react'
import { motion } from "motion/react";
const HomeFeature = ({ icon, title, desc }) => {

    return ( 
        <motion.div
            whileHover={{ scale: 1.07, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="
            Home-Features
        relative
        rounded-2xl
        p-6
        bg-linear-to-br 
        from-[#2b2b2b] 
        to-[#1f1f1f]
        text-white
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300
      "
        >
            <div className="text-4xl mb-4">{icon}</div>

            <h3 className="text-lg font-semibold mb-2">
                {title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
                {desc}
            </p>
        </motion.div>


    )
}

export default HomeFeature