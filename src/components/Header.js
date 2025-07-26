import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('zenith_token');
  const username = localStorage.getItem('zenith_username');

  const handleLogout = () => {
    localStorage.removeItem('zenith_token');
    localStorage.removeItem('zenith_username');
    navigate('/');
  };

  return (
    <header className="bg-casino-card border-b border-neon-blue/30 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-pink to-neon-blue rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Z</span>
            </div>
            <span className="text-2xl font-bold text-white neon-text text-neon-blue">
              Zenith Games
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-white hover:text-neon-green transition-colors ${
                location.pathname === '/' ? 'text-neon-green neon-text' : ''
              }`}
            >
              Home
            </Link>
            {!token ? (
              <>
                <Link 
                  to="/login" 
                  className={`text-white hover:text-neon-blue transition-colors ${
                    location.pathname === '/login' ? 'text-neon-blue neon-text' : ''
                  }`}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className={`bg-gradient-to-r from-neon-pink to-neon-purple px-6 py-2 rounded-lg text-white font-semibold hover:shadow-neon transition-all ${
                    location.pathname === '/register' ? 'shadow-neon' : ''
                  }`}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/dashboard" 
                  className={`text-white hover:text-neon-green transition-colors ${
                    location.pathname === '/dashboard' ? 'text-neon-green neon-text' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-neon-yellow">Welcome, {username}!</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-neon-green">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;