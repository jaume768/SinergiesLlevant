import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import TopBar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TransformacioCultural from './pages/TransformacioCultural';
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="App">
        <TopBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Serveis-empresarials" element={<TransformacioCultural />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
