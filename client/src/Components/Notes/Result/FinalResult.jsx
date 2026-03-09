import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import PDFGenerate from "../../../services/pdf.api";

const markDownComponent = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-orange-100 mt-6 mb-4 border-b border-indigo-200 pb-2">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold mt-5 mb-3 text-[#99d1efdd]">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-bold mt-4 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-md text-violet-100 leading-relaxed mb-3">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc ml-5 space-y-1 text-gray-200">{children}</ul>
  ),
  li: ({ children }) => <li className="marker:text-indigo-600">{children}</li>,
};

const FinalResult = ({ result }) => {
  const [quickRevision, setQuickRevision] = useState(false);

  if (!result?.content?.notes) {
    return <p className="text-gray-400 mt-6">Generating Notes...</p>;
  }
  // ✅ Convert notes object to string
  const formattedNotes = result.content.notes;
  return (

    // ===== Final Result Main Container =====
    <div className="Final-Result-Heading mt-6 p-3 space-y-10 rounded-xl">


      {/* ===== Header Section ==== Flex layout use kiya gaya hai taaki:
       - Left side me title rahe
       - Right side me action buttons aligned rahe
    */}

      <div className="flex justify-between items-center">
        {/* ===== Left Side: Section Title ===== */}
        <h2 className="text-2xl  text-[#c5f3f7] font-bold">
          📘 Generated Notes
        </h2>

        {/* ===== Right Side: Action Buttons Container ===== */}
        <div className="flex gap-2">
          {/* Quick Revision Toggle Button */}
          <button
            onClick={() => setQuickRevision(!quickRevision)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${quickRevision ? "bg-[#b14bf6] text-white" : "bg-indigo-100 text-indigo-600"}`}
          >
            {quickRevision ? " Exit Revision Mode" : "Quick Revision (5-min)"}
          </button>

          {/* Download PDF Button */}
          <button
            onClick={() => {
              PDFGenerate(result);
            }}
            className="px-3 py-2 rounded-lg text-sm font-medium transition bg-[#3c3838] text-white cursor-pointer"
          >
            {" "}
            🔃 Download PDF
          </button>
        </div>
      </div>
      {/* yaha pe header section end hota hai   */}

      {/* ===============================================================================*/}


      {/* yeh jo section hai isme subtopic show karaiyenge  */}
      {!quickRevision && (
        <section>
          <SectionHeader icon="📌" title="Sub Topics" variant="SubBox" />
          {Object.entries(result.content.subTopics).map(([key, value]) => (
            <div
              key={key}
              className="Revision-Sub-Topics mt-2 rounded-lg p-3"
            >
              <p className="font-semibold text-violet-400 capitalize">{key}</p>

              <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
      {/* subtopic section end  */}
      {/* ===============================================================================*/}




      {/* yaha pe hum notes details show karenge taaki user apna notes ka details dekh skhe  */}
      {!quickRevision && (
        <section>
          <SectionHeader icon="📘" title="Details Notes" variant="DetailBox" />
          <div className="Details-Notes border border-gray-200 rounded-xl p-6 shadow-sm text-white">
            <ReactMarkdown components={markDownComponent}>
              {formattedNotes}
            </ReactMarkdown>
          </div>
        </section>
      )}
      {/* yaha pe notes details section khatam hota hai  */}
      {/* ===============================================================================*/}




      {/* yaha pe hum quick revision point show karenge jab user revision mode pe click karega tabhi  */}
      {quickRevision && (
        <section className="Quick-Revision rounded-xl  border-green-400 p-3">
          <h3 className=" box text-xl mb-2 font-bold  text-violet-400 bg-[#f8f8f8ea] px-4 py-2 rounded-lg">
            {" "}
            Exam Quick Revision Point
          </h3>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            {result.content.revisionPoints.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}
      {/* yaha pe quick reviion mode end hota hai  */}
      {/* ===============================================================================*/}




      {/* yaha pe hum user ko important notes show karaiyenge yeh dono main hi show karega jab user revsion mode main ho ya naah ho  */}
      <section>
        <SectionHeader icon="❓" title="Important Questions" variant="Impbox" />

        <div className="Important-Question border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-bold text-violet-400 mb-2">
            Short Questions
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            {result.content.questions.short.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>

          <p className="mt-4 text-sm font-bold text-violet-400 mb-2">
            Long Questions
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            {result.content.questions.long.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>

          {result.content.questions.diagram && (
            <>
              <p className="mt-4 text-sm font-bold text-violet-400 mb-2">
                Diagram Question
              </p>

              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                <li>{result.content.questions.diagram}</li>
              </ul>
            </>
          )}
        </div>
      </section>

      {/* yaha pe important section khatam hota hai  */}
      {/* ===============================================================================*/}
    </div>
  );
};

export default FinalResult;
