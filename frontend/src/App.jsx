import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopSection from './pages/front';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import About from './pages/about';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path= "/signup" element={<SignupForm/>} />
         <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
