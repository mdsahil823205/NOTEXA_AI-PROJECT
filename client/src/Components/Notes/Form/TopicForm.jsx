import React, { useState } from "react";
import { motion } from "framer-motion";
import Toggle from "./Toggle";
import { generateNotesApi } from "../../../services/api";

const TopicForm = ({ setResult, setLoading, loading, Error, setError }) => {
  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [examType, setExamType] = useState("");
  const [revisionMode, setRevisionMode] = useState(false);
  const handleSubmit = async () => {
    if (!topic.trim()) {
      setError("Topic is required");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const payload = {
        topic,
        classLevel,
        examType,
        revisionMode,
      };

      const response = await generateNotesApi(payload);

      setResult(response); // ✅ important
    } catch (err) {
      setError("Failed to generate notes");
      console.log("Error from TopicForm:", err);
    } finally {
      setLoading(false); // ✅ always stop loading
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        mt-6
        rounded-2xl
        bg-linear-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-white/20
        p-5 sm:p-6 md:p-8
        space-y-5
        text-white
      "
    >
      {/* Inputs */}
      <input
        type="text"
        className="w-full p-3 text-sm sm:text-base rounded-xl
        bg-white/10 border border-white/20
        focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Enter Topic (e.g: Web Development)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <input
        type="text"
        className="w-full p-3 text-sm sm:text-base rounded-xl
        bg-white/10 border border-white/20
        focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Enter Class Level (e.g: Class-X, College)"
        value={classLevel}
        onChange={(e) => setClassLevel(e.target.value)}
      />

      <input
        type="text"
        className="w-full p-3 text-sm sm:text-base rounded-xl
        bg-white/10 border border-white/20
        focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Enter Exam Type (e.g: CBSE, JEE, NEET)"
        value={examType}
        onChange={(e) => setExamType(e.target.value)}
      />

      {/* Toggles */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-6">
        <Toggle
          label="Exam Revision Mode"
          ToggleChecked={revisionMode}
          onToggleChange={() => setRevisionMode(!revisionMode)}
        />
      
      </div>

      {/* Button */}
      <motion.button
        onClick={handleSubmit}
        whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
        whileTap={!loading ? { scale: 0.97 } : {}}
        disabled={loading}
        className={`
          w-full mt-4 py-3
          rounded-xl font-semibold
          flex items-center justify-center
          text-sm sm:text-base
          transition
          ${
            loading
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-200"
          }
        `}
      >
        {loading ? "Generating..." : "Generate Notes"}
      </motion.button>
    </motion.div>
  );
};

export default TopicForm;
