import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import LeaderBoard from './pages/LeaderBoard';
import Scanner from './pages/Scanner';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Avatar } from '@mui/material';

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/DashBoard" exact element={<LeaderBoard />} />
            <Route path="/Scanner" exact element={<Scanner />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
