import React from "react";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebse";
import axios from "axios";
import { serverUrl } from "../../App";
const Button = () => {
  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      const user = res.user;
      const name = user.displayName;
      const email = user.email;
      const result = await axios.post(`${serverUrl}/api/auth/google`, { name, email }, { withCredentials: true });
      console.log(result.data);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  return (
    <motion.button
      onClick={handleGoogleSignIn}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.99}}
      transition={{ type: "spring", stiffness: 250 }}
      className="button mt-8 px-8 py-3 rounded-xl flex items-center gap-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white/90 font-semibold shadow-lg shadow-purple-500/20
       mx-auto lg:mx-0 " >
      <FcGoogle size={22} />
      Continue With Google
    </motion.button>
  );
};

export default Button;
