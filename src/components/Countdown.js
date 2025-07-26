import React, { useState, useEffect } from 'react';

const Countdown = ({ onComplete, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setProgress(100);
          onComplete();
          return 60; // Reset to 60 seconds
        }
        const newTime = prev - 1;
        setProgress(((60 - newTime) / 60) * 100);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  useEffect(() => {
    if (isActive) {
      setTimeLeft(60);
      setProgress(0);
    }
  }, [isActive]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="4"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={timeLeft <= 10 ? '#ff0080' : '#00ff80'}
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all duration-1000 ${timeLeft <= 10 ? 'drop-shadow-[0_0_10px_#ff0080]' : 'drop-shadow-[0_0_10px_#00ff80]'}`}
          />
        </svg>
        
        {/* Timer Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-3xl font-bold ${timeLeft <= 10 ? 'text-neon-pink neon-text' : 'text-neon-green neon-text'}`}>
              {timeLeft}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;