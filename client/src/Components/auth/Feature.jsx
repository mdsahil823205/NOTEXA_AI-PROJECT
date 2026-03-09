import React from 'react'
import { motion } from "motion/react";
const Feature = ({icon, title, description}) => {
   return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
      feature
        p-5.25
        rounded-xl
        text-white
      "
    >
      <div className="text-3xl mb-3">
        {icon} 
      </div>
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
      <p className="text-white/70 mt-2 text-sm">
       {description}
      </p>
    </motion.div>
  );
}

export default Feature