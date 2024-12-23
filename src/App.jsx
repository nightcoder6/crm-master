import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Body from "./components/Body";
import Table from "./components/Table"; // Adjust the path if needed
import MessengerDashboard from "./components/MessengerDashboard.jsx";


function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Body setUser={setUser} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/table" element={<Table />} />
          <Route path="/dashboard" element={<MessengerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
