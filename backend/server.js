const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'zenith_games_secret_key_2024';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory user storage (for demo purposes)
// In production, this would be replaced with a proper database
const users = [
  {
    id: 1,
    username: 'demo',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password: demo123
    createdAt: new Date().toISOString()
  }
];

// Helper function to generate JWT token
const generateToken = (userId, username) => {
  return jwt.sign({ userId, username }, JWT_SECRET, { expiresIn: '7d' });
};

// Helper function to hash password
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Helper function to verify password
const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Zenith Games Backend Server is running!',
    timestamp: new Date().toISOString()
  });
});

// User Registration
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    if (username.length < 3) {
      return res.status(400).json({ message: 'Username must be at least 3 characters long' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = {
      id: users.length + 1,
      username: username.trim(),
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    // Generate JWT token
    const token = generateToken(newUser.id, newUser.username);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      username: newUser.username,
      userId: newUser.id
    });

    console.log(`New user registered: ${newUser.username} (ID: ${newUser.id})`);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error during registration' });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Find user
    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = generateToken(user.id, user.username);

    res.json({
      success: true,
      message: 'Login successful',
      token,
      username: user.username,
      userId: user.id
    });

    console.log(`User logged in: ${user.username} (ID: ${user.id})`);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error during login' });
  }
});

// Protected route example - Get user profile
app.get('/api/profile', authenticateToken, (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all users (admin endpoint - for demo purposes)
app.get('/api/users', (req, res) => {
  const userList = users.map(user => ({
    id: user.id,
    username: user.username,
    createdAt: user.createdAt
  }));
  
  res.json({
    success: true,
    users: userList,
    totalUsers: userList.length
  });
});

// Token verification endpoint
app.post('/api/verify-token', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Token is valid',
    user: {
      userId: req.user.userId,
      username: req.user.username
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler for unknown routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 Zenith Games Backend Server Started');
  console.log(`📍 Server running on http://localhost:${PORT}`);
  console.log(`🎮 API Health Check: http://localhost:${PORT}/api/health`);
  console.log(`👥 Total registered users: ${users.length}`);
  console.log('⚡ Ready to handle requests!');
  console.log('');
  console.log('Available endpoints:');
  console.log('  POST /api/register - User registration');
  console.log('  POST /api/login - User login');
  console.log('  GET  /api/profile - Get user profile (protected)');
  console.log('  GET  /api/users - Get all users');
  console.log('  POST /api/verify-token - Verify JWT token');
  console.log('  GET  /api/health - Health check');
});