import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '../src/pages/dashboard';

// Mocking the logs data
jest.mock('../src/data/logs', () => ({
  logs: [
    { id: 1, activity: "Car Travel", carbon: 10 },
    { id: 2, activity: "Electricity Usage", carbon: 6 },
  ]
}));

describe('Dashboard Component Tests', () => {
  test('renders Dashboard correctly', () => {
    render(<Dashboard />);
    
    // Verify UI rendering
    expect(screen.getByText('Carbon Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Total Carbon Footprint')).toBeInTheDocument();
  });

  test('calculates and displays total carbon correctly', () => {
    render(<Dashboard />);
    
    // 10 + 6 = 16
    expect(screen.getByText('16')).toBeInTheDocument();
    expect(screen.getByText('kg CO₂')).toBeInTheDocument();
  });

  test('displays correct visual indicator based on total carbon', async () => {
    render(<Dashboard />);
    
    // Since total is 16 (> 15), it should display "High"
    // Objective 6: Implement asynchronous testing using findBy
    const indicator = await screen.findByText('High');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveStyle('color: #dc2626');
  });
});
