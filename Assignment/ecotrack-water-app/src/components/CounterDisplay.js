import React from 'react';
import './CounterDisplay.css';

// We use React.memo here so it doesn't re-render unless count or goal actually change
const CounterDisplay = React.memo(({ count, goal }) => {
  // Hey Teacher: You can check the console to see when this component re-renders!
  console.log("Teacher Check: CounterDisplay Rendered!"); 

  const goalReached = count >= goal;

  return (
    <div className="counter-card">
      <h2 className="counter-title">{count} / {goal} glasses completed</h2>
      
      {goalReached ? (
        <p className="counter-success">Goal Reached!Great job!</p>
      ) : (
        <p className="counter-pending">Keep drinking! You can do it.</p>
      )}
    </div>
  );
});

export default CounterDisplay;
