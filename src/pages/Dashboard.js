import React, { useState } from 'react';
import Game from '../components/Game';
import Wallet from '../components/Wallet';
import Referral from '../components/Referral';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('game');
  const username = localStorage.getItem('zenith_username');

  const tabs = [
    { id: 'game', name: 'Game', icon: '🎮', component: Game },
    { id: 'wallet', name: 'Wallet', icon: '💰', component: Wallet },
    { id: 'referral', name: 'Referral', icon: '👥', component: Referral }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || Game;

  return (
    <div className="min-h-screen">
      {/* Dashboard Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white neon-text text-neon-blue mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-300">
          Hello, <span className="text-neon-yellow font-semibold">{username}</span>! 
          Ready to play and win?
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex justify-center">
          <div className="game-card rounded-xl p-2">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-neon-blue to-blue-600 text-white shadow-neon'
                      : 'bg-casino-darker text-gray-400 hover:text-white hover:bg-casino-accent'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="animated-content">
        <ActiveComponent />
      </div>

      {/* Quick Stats Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="game-card rounded-full px-6 py-3">
          <div className="flex items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="text-neon-green font-bold">ONLINE</div>
              <div className="text-gray-400 text-xs">Status</div>
            </div>
            <div className="text-center">
              <div className="text-neon-yellow font-bold">₹10,000</div>
              <div className="text-gray-400 text-xs">Balance</div>
            </div>
            <div className="text-center">
              <div className="text-neon-blue font-bold">ZENITH123</div>
              <div className="text-gray-400 text-xs">Referral</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Access */}
      <div className="lg:hidden fixed bottom-4 right-4">
        <div className="flex flex-col space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all transform hover:scale-110 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-neon-blue to-blue-600 shadow-neon'
                  : 'bg-casino-card text-gray-400 hover:text-white'
              }`}
            >
              {tab.icon}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animated-content {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;