#!/bin/bash

# Zenith Games Development Launcher
echo "🎮 Starting Zenith Games Development Environment..."
echo ""

# Function to check if port is in use
check_port() {
    if lsof -ti:$1 >/dev/null 2>&1; then
        echo "⚠️  Port $1 is already in use. Please stop the existing process or use a different port."
        return 1
    fi
    return 0
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

# Check ports
echo "📡 Checking ports..."
check_port 3000 || exit 1
check_port 5000 || exit 1

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

echo "✅ Dependencies checked"
echo ""

# Function to start backend
start_backend() {
    echo "🛠️  Starting backend server on port 5000..."
    cd backend
    npm start &
    BACKEND_PID=$!
    cd ..
    echo "Backend PID: $BACKEND_PID"
}

# Function to start frontend
start_frontend() {
    echo "⚛️  Starting React frontend on port 3000..."
    npm start &
    FRONTEND_PID=$!
    echo "Frontend PID: $FRONTEND_PID"
}

# Start both services
start_backend
sleep 3
start_frontend

echo ""
echo "🚀 Zenith Games is starting up!"
echo ""
echo "📍 Frontend: http://localhost:3000"
echo "📍 Backend:  http://localhost:5000"
echo "📍 API Health: http://localhost:5000/api/health"
echo ""
echo "🎮 Demo Login Credentials:"
echo "   Username: demo"
echo "   Password: demo123"
echo ""
echo "🛑 To stop both servers, press Ctrl+C"
echo ""

# Wait for user interrupt
trap 'echo ""; echo "🛑 Shutting down Zenith Games..."; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit 0' INT

# Keep script running
wait