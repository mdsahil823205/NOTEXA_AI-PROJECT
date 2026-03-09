import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { fetchCurrentUserapi } from "./services/api";
import { useDispatch, useSelector } from "react-redux";
import Pricing from "./pages/Pricing";
import History from "./pages/History";
import Notes from "./pages/Notes";
export const serverUrl = "https://notexa-ai-project-server.onrender.com";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCurrentUserapi(dispatch);
  }, [dispatch]);
  const userData = useSelector((state) => state.user.userData);
  console.log("Current user data:", userData);
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
          element={userData ? <Navigate to="/" replace /> : <Auth />}
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
