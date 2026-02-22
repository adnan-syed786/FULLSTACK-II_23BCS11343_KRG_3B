import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import { useAuth } from '../src/context/AuthContext';

// Objective 7: Apply mocking to simulate external data/context
jest.mock('../src/context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Header Component Tests', () => {
  const mockSetIsAuthenticated = jest.fn();

  beforeEach(() => {
    useAuth.mockReturnValue({
      setIsAuthenticated: mockSetIsAuthenticated,
    });
    jest.clearAllMocks();
  });

  // Objective 4 & 5: Test React components and verify UI rendering
  test('renders Header with correct title and navigation links', () => {
    render(
      <BrowserRouter>
        <Header title="EcoTrack App" />
      </BrowserRouter>
    );

    // Querying elements from the DOM
    expect(screen.getByText('EcoTrack App')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Logs')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  // Objective 8: Snapshot testing
  test('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header title="EcoTrack App" />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Objective 7: Mocking and interaction
  test('calls setIsAuthenticated and navigates on Logout click', () => {
    render(
      <BrowserRouter>
        <Header title="EcoTrack App" />
      </BrowserRouter>
    );

    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);

    expect(mockSetIsAuthenticated).toHaveBeenCalledWith(false);
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
