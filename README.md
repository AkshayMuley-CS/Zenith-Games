# 🎮 Zenith Games - Casino-Style Prediction Platform

A complete full-stack casino-style prediction gaming website built with React, Tailwind CSS, Node.js, and Express.js. Features a neon-themed design with 1-minute color prediction games, wallet management, and referral system.

![Zenith Games](https://img.shields.io/badge/Zenith-Games-blue?style=for-the-badge&logo=gamepad&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat&logo=node.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=flat&logo=tailwindcss)

## ✨ Features

### 🎯 Frontend (React + Tailwind CSS)
- **Responsive Neon Design**: Dark casino theme with glowing neon effects
- **Color Prediction Game**: 60-second countdown with Red/Green/Violet prediction
- **User Authentication**: Secure login/register with JWT tokens
- **Wallet Management**: Demo balance of ₹10,000 with deposit/withdraw UI
- **Referral System**: Static referral codes with social sharing
- **Game History**: Track wins/losses and view past results
- **Mobile Responsive**: Optimized for all screen sizes

### 🛠️ Backend (Node.js + Express)
- **RESTful API**: Clean API endpoints for authentication
- **JWT Authentication**: Secure token-based user sessions
- **Password Hashing**: Bcrypt encryption for secure passwords
- **CORS Enabled**: Cross-origin requests for frontend-backend communication
- **In-Memory Storage**: Demo user data (easily replaceable with database)
- **Error Handling**: Comprehensive error management

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/zenith-games.git
cd zenith-games
```

2. **Install Frontend Dependencies**
```bash
npm install
```

3. **Install Backend Dependencies**
```bash
cd backend
npm install
cd ..
```

### 🏃‍♂️ Running the Application

1. **Start the Backend Server**
```bash
cd backend
npm start
```
The server will run on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
```bash
npm start
```
The React app will run on `http://localhost:3000`

3. **Access the Application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/health

## 🎮 Demo Credentials

Use these credentials to test the application:
- **Username**: `demo`
- **Password**: `demo123`

## 📁 Project Structure

```
zenith-games/
├── public/                 # Public assets
├── src/                   # React frontend
│   ├── components/        # Reusable components
│   │   ├── Header.js     # Navigation header
│   │   ├── Game.js       # Color prediction game
│   │   ├── Countdown.js  # 60-second timer
│   │   ├── Wallet.js     # Balance management
│   │   └── Referral.js   # Referral system
│   ├── pages/            # Page components
│   │   ├── Home.js       # Landing page
│   │   ├── Login.js      # User login
│   │   ├── Register.js   # User registration
│   │   └── Dashboard.js  # Main game dashboard
│   ├── App.js            # Main app component
│   ├── index.js          # React entry point
│   └── index.css         # Global styles + Tailwind
├── backend/              # Express.js backend
│   ├── server.js         # Main server file
│   ├── package.json      # Backend dependencies
│   └── .env             # Environment variables
├── package.json          # Frontend dependencies
├── tailwind.config.js    # Tailwind configuration
└── README.md            # Project documentation
```

## 🎨 Design Features

### Neon Casino Theme
- **Dark Background**: Gradient from casino-darker to casino-accent
- **Neon Colors**: Pink, Blue, Green, Purple, Yellow glowing effects
- **Glass Morphism**: Translucent cards with backdrop blur
- **Smooth Animations**: Hover effects, transitions, and result animations
- **Mobile First**: Responsive design for all devices

### Game Mechanics
- **60-Second Rounds**: Automatic game cycles with countdown timer
- **Color Prediction**: Choose between Red, Green, or Violet
- **Instant Results**: Random result generation with win/loss tracking
- **Game History**: Last 5 results display and personal game log
- **Visual Feedback**: Glowing effects and animations for selections

## 🔧 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `GET /api/profile` - Get user profile (protected)
- `POST /api/verify-token` - Verify JWT token

### Utility
- `GET /api/health` - Server health check
- `GET /api/users` - Get all users (demo)

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `build`
5. Deploy

### Backend (Railway/Render)
1. Push backend code to GitHub
2. Connect to Railway/Render
3. Set start command: `npm start`
4. Add environment variables
5. Deploy

## 🔐 Environment Variables

Create `backend/.env` file:
```env
NODE_ENV=production
PORT=5000
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=https://your-frontend-domain.com
```

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Component-based UI library
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Custom CSS** - Neon effects and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.18** - Web framework
- **JWT (jsonwebtoken)** - Authentication tokens
- **Bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🎯 Future Enhancements

- [ ] Real-time multiplayer gaming
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] WebSocket support for live updates
- [ ] Advanced betting system
- [ ] Admin dashboard
- [ ] Email verification
- [ ] Payment gateway integration
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics and statistics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@zenithgames.com or create an issue on GitHub.

## ⚠️ Disclaimer

This is a demo application for educational purposes. It does not involve real money gambling or betting. All transactions are simulated with demo currency.

---

**Built with ❤️ by the Zenith Games Team**

🌟 **Star this repository if you found it helpful!** 🌟