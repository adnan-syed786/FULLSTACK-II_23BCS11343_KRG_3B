import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../src/pages/login';
import { useAuth } from '../src/context/AuthContext';

// Mocking dependencies
jest.mock('../src/context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Login Component Tests', () => {
  const mockSetIsAuthenticated = jest.fn();

  beforeEach(() => {
    useAuth.mockReturnValue({
      setIsAuthenticated: mockSetIsAuthenticated,
    });
    jest.clearAllMocks();
  });

  test('renders login page correctly', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Verify UI rendering
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  // Objective 6: Asynchronous testing using waitFor
  test('handles login process correctly', async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    // Wait for the mocked functions to be called
    await waitFor(() => {
      expect(mockSetIsAuthenticated).toHaveBeenCalledWith(true);
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
