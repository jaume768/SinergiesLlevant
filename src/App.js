import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import TopBar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;