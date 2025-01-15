import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage/HomePage'


// Component for Handling Routes
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes/>
    </Router>
  )
}

export default App
