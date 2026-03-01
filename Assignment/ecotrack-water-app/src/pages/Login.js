import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  // This just fakes a login process to meet the assignment requirement
  const handleFakeLogin = () => {
    // Save a pretend token so the ProtectedRoute lets us in
    localStorage.setItem('ecoToken', 'fake-jwt-token-123');
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Login to EcoTrack</h2>
      
      <button onClick={handleFakeLogin} className="login-btn">
        Log In (Demo)
      </button>
    </div>
  );
}

export default Login;
