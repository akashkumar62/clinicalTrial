import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Participants from './pages/Participants';
import Healthmetrics from './pages/Healthmetrics';
import Home from './pages/Home';

const App = () => {
  
  return (
    <Router>
    <Routes>
      <Route path ="/"  element={<Home />}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/health-metrics" element={<Healthmetrics />} />
      </Route>
    </Routes>
  </Router>
    
  );
};

export default App;
