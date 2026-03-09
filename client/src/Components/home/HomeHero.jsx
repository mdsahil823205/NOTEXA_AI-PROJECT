import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import heroImage from "../../assets/Hero-Image.png"
const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div
        className="max-w-7xl mx-auto px-6 pt-24 
      grid grid-cols-1 lg:grid-cols-2 
      gap-12 items-center"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          {/* Heading */}
          <motion.h1
             whileHover={{ rotateX: 6, rotateY: -8 }}

            style={{ transformStyle: "preserve-3d" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight
                        text-white/90"
          >
            Turn Any Topic Into <br />
            Smart{" "}
            <span
              className="bg-linear-to-tr from-orange-300 via-orange-500 to-orange-600
                       bg-clip-text text-transparent"
            >
              AI Notes
            </span>{" "}
            Instantly
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            whileHover={{ rotateX: 4, rotateY: -4 }}

            style={{ transformStyle: "preserve-3d" }}
            className="max-w-xl mt-6 text-base sm:text-lg text-gray-300 leading-relaxed"
          >
            Stop wasting hours writing notes. Let{" "}
            <span
              className="bg-linear-to-r from-orange-300 to-orange-500
                       bg-clip-text text-transparent"
            >
              AI create focused
            </span>
            , high-quality study material, diagrams, and revision-ready content
            instantly.
          </motion.p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            onClick={() => navigate("/notes")}
            className="get-start mt-8 px-8 py-3 rounded-xl
            text-white font-medium shadow-lg shadow-purple-300/30 cursor-pointer"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          {/* Image */}
          <img
            src={heroImage}
            alt="AI Notes Preview"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
