import React from "react";
import { motion } from "motion/react";

const NotesCard = ({ note }) => {
    if (!note) return null;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className=" Histoy-Card  w-full p-5 transition-all duration-300"
        >
            {/* Header  topic section */}
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl sm:text-xl font-semibold text-white wrap-break-words">
                    {note.topic}
                </h3>

                <span className="text-sm bg-[#dcaa21c0] px-3 py-1 rounded-md text-white font-medium">
                    ID : {note._id?.slice(-10)}
                </span>
            </div>

            {/* Info section  */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                {/* Info section Class Level */}
                <div>
                    <p className="text-gray-200">Class Level</p>
                    <p className="font-medium wrap-break-words capitalize">
                        {note.classLevel ? note.classLevel : "none"}
                    </p>
                </div>
                {/* Info section Exam Type */}
                <div>
                    <p className="text-gray-400">Exam Type</p>
                    <p className="font-medium capitalize">{note.examType ? note.examType : "none"}</p>
                </div>
                {/* Info section Revision Mode */}
                <div>
                    <p className="text-gray-400">Revision Mode</p>
                    <p className="font-medium">{note.revisionMode ? "ON" : "OFF"}</p>
                </div>
                {/* Info section  time */}
                <div>
                    <p className="text-gray-400">Created On</p>
                    <p className="font-medium">
                        {new Date(note.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default NotesCard;
