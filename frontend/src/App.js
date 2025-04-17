import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:hotelId" element={<Rooms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;