import React, { useState } from "react";
import { motion } from "motion/react";
import TopicForm from "../Components/Notes/Form/TopicForm";
import Header from "../Components/Notes/Header/Header";
import Result from "../Components/Notes/Result/Result";
import SideBar from "../Components/Notes/Result/SideBar";
import FinalResult from "../Components/Notes/Result/FinalResult";

const Notes = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [Error, setError] = useState(false);

    return (
        <div
            className="min-h-screen bg-linear-to-br from-[#050505]  via-[#0a0a1a]  to-[#000000] 
      px-4 sm:px-6 py-8 "
        >
            {/* yeh note page ka header hai  */}
            <Header />
            {/* aur yeh notes page ka unput section hai */}
            <TopicForm
                loading={loading}
                setLoading={setLoading}
                setResult={setResult}
                Error={Error}
                setError={setError}
            />

            {/* aur yeh notes page ka loading section hai  */}
            {!result && <Result loading={loading} />}

            {/* yaha pe hum jo bhi final result aayega uska code  */}
            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" mt-2 flex flex-col gap-6 lg:grid lg:grid-cols-4"
                >
                    <div className="lg:col-span-1 mt-2">
                        <SideBar result={result.notes} />
                    </div>
                    <div className="lg:col-span-3 rounded-2xl bg-black/10 backdrop-blur-xl border border-white/20 p-6 mt-2">
                        <FinalResult result={result.notes} />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Notes;
