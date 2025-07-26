import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('zenith_token', data.token);
        localStorage.setItem('zenith_username', data.username);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Register Card */}
        <div className="game-card rounded-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white neon-text text-neon-green mb-2">
              Join Zenith Games
            </h1>
            <p className="text-gray-400">
              Create your account and start winning
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-gray-400 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                minLength={3}
                className="w-full px-4 py-3 bg-casino-darker border border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors"
                placeholder="Choose a username"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 3 characters</p>
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-3 bg-casino-darker border border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors"
                placeholder="Create a password"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-400 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-casino-darker border border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-neon-green to-green-600 hover:from-green-600 hover:to-neon-green px-6 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-neon transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-neon-blue hover:text-blue-400 font-semibold transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-6 p-4 bg-casino-darker rounded-lg border border-gray-600">
            <h3 className="text-sm font-semibold text-gray-300 mb-2">Join Zenith Games and get:</h3>
            <div className="text-sm text-gray-400 space-y-1">
              <div>• ₹10,000 demo balance to start</div>
              <div>• Instant color prediction games</div>
              <div>• ₹500 referral rewards</div>
              <div>• 24/7 gaming access</div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;