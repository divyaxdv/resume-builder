import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import LandingPage from "./components/LandingPage";
import Body from "./components/Body/Body";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

function App() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", margin: 0 }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<PrivateRoute element={Body} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Box>
  );
}

export default App;
