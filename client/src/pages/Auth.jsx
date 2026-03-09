import { FcGoogle } from "react-icons/fc";
import React from "react";
import { motion } from "motion/react";
import Feature from "../Components/auth/Feature";
import Header from "../Components/auth/Header";
import Heading from "../Components/auth/Heading";
import Button from "../Components/auth/Button";
import Description from "../Components/auth/Description";
const features = [
  {
    id: 1,
    title: "200 Free Credits",
    description: "Start with 200 credits to generate notes without paying.",
    icon: "🎁",
  },
  {
    id: 2,
    title: "Exam Notes",
    description: "High-yield, revision-ready exam-oriented notes.",
    icon: "📝",
  },
  {
    id: 3,
    title: "Project Notes",
    description: "Well-structured documentation for assignments & projects.",
    icon: "🗒️",
  },
  {
    id: 4, // fixed duplicate id
    title: "5-Min Quick Revision",
    description: "Generate lightning-fast bullet points for last-minute exam prep.",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Free PDF Download",
    description: "Download clean, printable PDFs instantly.",
    icon: "📄",
  },
  {
    id: 6,
    title: "Notes History Tracking",
    description: "Access and manage all your previously generated notes anytime.",
    icon: "📚",
  },
];
const Auth = () => {
  return (
    <div
      className="min-h-screen bg-linear-to-br from-[#050505]  via-[#0a0a1a]  to-[#000000] 
      px-4 sm:px-6 py-8 "
    >
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="max-w-7xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
        >
          <Heading />
          <Button />

          <Description />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((e, idx) => {
            return (
              <Feature
                key={idx}
                icon={e.icon}
                title={e.title}
                description={e.description}
              />
            );
          })}
        </motion.div>
      </main>
    </div>
  );
};

export default Auth;
