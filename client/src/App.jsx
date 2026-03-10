import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Pricing from "./pages/Pricing";
import History from "./pages/History";
import Notes from "./pages/Notes";

import { fetchCurrentUserapi } from "./services/api";

export const serverUrl = "https://notexa-ai-project-server.onrender.com";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      await fetchCurrentUserapi(dispatch);
      setLoading(false);
    };

    getUser();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-3xl w-full bg-linear-to-br from-[#050505]  via-[#0a0a1a]  to-[#000000]  text-white ">
        Loading...
      </div>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 2.8,
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1.3,
        touchMultiplier: 1.2,
        infinite: false,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to="/auth" replace />}
        />

        <Route
          path="/auth"
          element={!userData ? <Auth /> : <Navigate to="/" replace />}
        />

        <Route
          path="/history"
          element={userData ? <History /> : <Navigate to="/auth" replace />}
        />

        <Route
          path="/pricing"
          element={userData ? <Pricing /> : <Navigate to="/auth" replace />}
        />

        <Route
          path="/notes"
          element={userData ? <Notes /> : <Navigate to="/auth" replace />}
        />
      </Routes>
    </ReactLenis>
  );
};

export default App;
