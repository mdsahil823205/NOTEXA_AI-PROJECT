import React from "react";
import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { useEffect } from "react";
import NavBar from "../Components/history/NavBar";

import NotesCard from "../Components/history/Notescard";

const History = () => {
  const [notesData, setNotesData] = useState([]);

  const getNoteHistory = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/notes/notes-history`, {
        withCredentials: true,
      });
      console.log(response?.data?.getUserNotes);
      setNotesData(response?.data?.getUserNotes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoteHistory();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050505]  via-[#0a0a1a]  to-[#000000] p-8">
      <NavBar />
      <h1
        className="text-gray-400 mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 sm:px-3"
      >
        Notes History
      </h1>

      {/* all cards section  */}
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        {notesData.map((e, idx) => {
          return <NotesCard key={idx} note={e} />;
        })}
      </div>
    </div>
  );
};

export default History;
