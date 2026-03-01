import React, { useState, useEffect, useCallback } from 'react';
import CounterDisplay from '../components/CounterDisplay';
import './WaterTracker.css';

function WaterTracker() {
  // Grab the starting values from local storage, or use defaults
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem('waterCount')) || 0;
  });
  
  const [goal, setGoal] = useState(() => {
    return Number(localStorage.getItem('waterGoal')) || 8;
  });
  
  // Grouping our API data so it's easier to manage
  const [tipData, setTipData] = useState({ 
    text: '', 
    isLoading: true, 
    errorMessage: null 
  });

  // Keep local storage fresh whenever the user updates their count or goal
  useEffect(() => { 
    localStorage.setItem('waterCount', count); 
  }, [count]);

  useEffect(() => { 
    localStorage.setItem('waterGoal', goal); 
  }, [goal]);

  // Setup the function to grab advice from our API
  const fetchHealthTip = useCallback(async () => {
    setTipData({ text: '', isLoading: true, errorMessage: null });
    
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      
      setTipData({ 
        text: data.slip.advice, 
        isLoading: false, 
        errorMessage: null 
      });
    } catch (error) {
      setTipData({ 
        text: '', 
        isLoading: false, 
        errorMessage: 'Oops! Something went wrong fetching the tip.' 
      });
    }
  }, []);

  // Call the API function once when the page first loads
  useEffect(() => { 
    fetchHealthTip(); 
  }, [fetchHealthTip]);

  // Handlers for the buttons. We use useCallback to stop child components from re-rendering for no reason!
  const handleAddWater = useCallback(() => setCount(prev => prev + 1), []);
  const handleRemoveWater = useCallback(() => setCount(prev => Math.max(0, prev - 1)), []);
  const handleReset = useCallback(() => setCount(0), []);

  return (
    <div className="tracker-container">
      <h1>EcoTrack Water</h1>
      
      <div className="tracker-counter-wrapper">
        <CounterDisplay count={count} goal={goal} />
      </div>

      <div className="tracker-buttons">
        <button onClick={handleAddWater}>+ Add</button>
        <button onClick={handleRemoveWater}>- Remove</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="goal-container">
        <label className="goal-label">Daily Goal (glasses): </label>
        <input 
          type="number" 
          value={goal} 
          onChange={(e) => setGoal(Number(e.target.value))} 
          className="goal-input" 
          min="1"
        />
      </div>

      <div className="tip-container">
        <strong className="tip-title">Today’s Health Tip:</strong>
        
        <div className="tip-content">
          {tipData.isLoading && <p className="tip-loading">Loading tip...</p>}
          {tipData.errorMessage && <p className="tip-error">{tipData.errorMessage}</p>}
          {tipData.text && <p className="tip-text">"{tipData.text}"</p>}
        </div>
        
        <button onClick={fetchHealthTip} className="btn-new-tip">
          Get Another Tip
        </button> 
      </div>
    </div>
  );
}

export default WaterTracker;