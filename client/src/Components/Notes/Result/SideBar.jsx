import React from "react";
import { motion } from "framer-motion";
const SideBar = ({ result }) => {
  // ✅ Full Safety Check
  if (!result || !result.content || !result.content.subTopics) {
    return null; // ya loading dikha sakte ho
  }

  return (
    <div className="Side-Bar p-5 space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-xl">📌</span>
        <h3 className="text-lg font-semibold text-orange-300">
          Quick Exam View
        </h3>
      </div>

      <section>
        <p className="text-sm font-semibold text-gray-300">
          ⭐ Sub Topics priority wise
        </p>

        {Object.entries(result.content.subTopics).map(([key, value]) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            key={key}
            className="side-inner-box mt-2 rounded-lg bg-gray-100 p-3"
          >
            <p className="font-semibold text-violet-400 capitalize">{key}</p>

            <ul className="list-disc ml-5 text-sm text-gray-200 space-y-1">
              {value.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
      {/* Exam Importance Section */}

      <p className="text-xl font-medium text-orange-300">📊 Exam Importance</p>
      <section className=" Side-Bar rounded-lg bg-yellow-50 border border-yellow-200 p-4 shadow-sm space-y-4">

        {/* Importance Level */}
        <div className="text-sm font-semibold text-gray-200 capitalize">
          ❓ {result.content.importance || "Not specified"} Questions
        </div>

        {/* Short Questions */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="side-inner-box rounded-lg bg-indigo-50 border border-indigo-200 p-3">
          <p className="
         text-violet-400 text-sm font-medium  mb-2">
            ✏️ Short Questions
          </p>
          <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
            {result.content.questions.short.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </motion.div>

        {/* Long Questions */}

        <motion.div
          whileHover={{ scale: 1.02 }} className="side-inner-box rounded-lg bg-indigo-50 border border-indigo-200 p-3">
          <p className="text-sm font-medium text-violet-400 mb-2">
            📝 Long Questions
          </p>
          <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
            {result.content.questions.long.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </motion.div>

        {/* Diagram */}

        <motion.div
          whileHover={{ scale: 1.02 }} className="side-inner-box rounded-lg bg-indigo-50 border border-indigo-200 p-3">
          <p className="text-sm font-medium text-violet-400 mb-2">📈 Diagram</p>
          <p className="text-sm text-gray-300">
            {result.content.questions?.diagram}
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default SideBar;
