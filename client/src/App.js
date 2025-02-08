import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import MeetOurTeam from './components/MeetOurTeam';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/meet-our-team" element={<MeetOurTeam />} />
      </Routes>
    </Router>
  );
};

export default App;