import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to EcoTrack Dashboard</h2>
      
      <p>
        Select "Water Tracker" from the navigation menu or click below to log your water intake.
      </p>

      <Link to="/dashboard/water">
        <button className="dashboard-btn">
          Go to Water Tracker
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;
