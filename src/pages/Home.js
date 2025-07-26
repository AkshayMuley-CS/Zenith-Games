import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('zenith_token');

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white neon-text text-neon-blue mb-6">
            ZENITH
            <span className="block text-neon-purple">GAMES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the ultimate casino-style prediction gaming platform. 
            Predict colors, win big, and join the elite gaming community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="game-card rounded-xl p-6 text-center transform hover:scale-105 transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Color Prediction</h3>
            <p className="text-gray-400">
              60-second prediction games with instant results and real-time gameplay.
            </p>
          </div>
          <div className="game-card rounded-xl p-6 text-center transform hover:scale-105 transition-all">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Wins</h3>
            <p className="text-gray-400">
              Win big with every correct prediction. Fast payouts and secure transactions.
            </p>
          </div>
          <div className="game-card rounded-xl p-6 text-center transform hover:scale-105 transition-all">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-white mb-2">Referral Rewards</h3>
            <p className="text-gray-400">
              Earn ₹500 for every friend you invite. Build your gaming network.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green neon-text mb-2">10K+</div>
            <div className="text-gray-400">Active Players</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-yellow neon-text mb-2">₹50L+</div>
            <div className="text-gray-400">Prizes Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-blue neon-text mb-2">24/7</div>
            <div className="text-gray-400">Gaming</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-pink neon-text mb-2">99%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          {!token ? (
            <>
              <div className="space-x-4">
                <Link
                  to="/register"
                  className="inline-block bg-gradient-to-r from-neon-pink to-neon-purple px-8 py-4 rounded-lg text-white font-bold text-lg hover:shadow-neon-lg transform hover:scale-105 transition-all"
                >
                  🚀 Start Playing Now
                </Link>
                <Link
                  to="/login"
                  className="inline-block bg-transparent border-2 border-neon-blue px-8 py-4 rounded-lg text-neon-blue font-bold text-lg hover:bg-neon-blue hover:text-white transition-all"
                >
                  Login
                </Link>
              </div>
              <p className="text-gray-400">
                Join thousands of players and start your winning journey today!
              </p>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="inline-block bg-gradient-to-r from-neon-green to-green-600 px-8 py-4 rounded-lg text-white font-bold text-lg hover:shadow-neon-lg transform hover:scale-105 transition-all"
              >
                🎮 Go to Dashboard
              </Link>
              <p className="text-gray-400">
                Welcome back! Ready to play and win?
              </p>
            </>
          )}
        </div>

        {/* How to Play */}
        <div className="mt-16 game-card rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white neon-text text-neon-green mb-8">
            How to Play
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Choose Color</h3>
              <p className="text-gray-400">
                Select Red, Green, or Violet before the 60-second timer ends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Wait for Result</h3>
              <p className="text-gray-400">
                Watch the countdown and see the random result generated.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-yellow rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Win Rewards</h3>
              <p className="text-gray-400">
                Correct predictions earn you points and unlock bigger rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;