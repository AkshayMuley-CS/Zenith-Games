# 🚀 Zenith Games - Quick Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm package manager

## Quick Start (Automated)

### Option 1: Use the included launcher script
```bash
./start-dev.sh
```

### Option 2: Manual setup

1. **Install Dependencies**
```bash
# Frontend dependencies
npm install

# Backend dependencies
cd backend
npm install
cd ..
```

2. **Start Backend Server**
```bash
cd backend
npm start
```
Server will run on http://localhost:5000

3. **Start Frontend (in new terminal)**
```bash
npm start
```
React app will run on http://localhost:3000

## Demo Login Credentials
- **Username**: `demo`
- **Password**: `demo123`

## What You'll See

### Home Page (/)
- Neon-themed landing page
- Feature showcase
- Call-to-action buttons

### Login (/login)
- User authentication
- Demo credentials provided
- JWT token-based sessions

### Register (/register)
- User registration form
- Password validation
- Automatic login after registration

### Dashboard (/dashboard) - Protected Route
- **Game Tab**: 60-second color prediction game
- **Wallet Tab**: Demo balance management (₹10,000 starting)
- **Referral Tab**: Social sharing with referral codes

## Features Included

✅ **Frontend (React + Tailwind)**
- Responsive neon casino design
- Color prediction game with 60s countdown
- User authentication (Login/Register)
- Protected routes with JWT
- Wallet management UI
- Referral system with social sharing
- Game history and statistics
- Mobile-responsive design

✅ **Backend (Node.js + Express)**
- RESTful API endpoints
- JWT authentication
- Password hashing with bcrypt
- CORS enabled
- Error handling
- In-memory user storage (demo)

✅ **Security**
- JWT token authentication
- Password hashing
- Protected routes
- Input validation

## API Endpoints

- `POST /api/register` - User registration
- `POST /api/login` - User login  
- `GET /api/profile` - Get user profile (protected)
- `GET /api/users` - Get all users
- `POST /api/verify-token` - Verify JWT token
- `GET /api/health` - Server health check

## File Structure
```
zenith-games/
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components  
│   ├── App.js         # Main app
│   └── index.css      # Styles + Tailwind
├── backend/
│   ├── server.js      # Express server
│   └── package.json   # Backend deps
├── public/            # Static assets
├── package.json       # Frontend deps
└── README.md         # Full documentation
```

## Technologies Used
- **Frontend**: React 18, Tailwind CSS 3, React Router 6
- **Backend**: Node.js, Express.js, JWT, Bcrypt
- **Styling**: Custom neon effects, glass morphism
- **Authentication**: JWT tokens, localStorage

## Next Steps
1. Replace in-memory storage with a database
2. Add real-time multiplayer features
3. Implement payment gateway integration
4. Add email verification
5. Deploy to production (Vercel + Railway)

---

🎮 **Enjoy playing Zenith Games!** 🎮