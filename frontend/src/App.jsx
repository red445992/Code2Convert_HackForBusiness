import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopSection from './pages/front'; // ✅ file exists, name is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopSection />} />
        {/* other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
