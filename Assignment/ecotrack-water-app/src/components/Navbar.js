import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Clear out our token to effectively log the user out
    localStorage.removeItem('ecoToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/water">Water Tracker</Link>
      
      <button onClick={handleLogout} className="navbar-logout">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;