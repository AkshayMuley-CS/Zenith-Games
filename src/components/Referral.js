import React, { useState } from 'react';

const Referral = () => {
  const [referralCode] = useState('ZENITH123');
  const [copied, setCopied] = useState(false);
  const [referrals] = useState([
    { id: 1, username: 'GameMaster01', joinDate: '2024-01-15', status: 'active', reward: 500 },
    { id: 2, username: 'LuckyPlayer', joinDate: '2024-01-14', status: 'active', reward: 500 },
    { id: 3, username: 'WinnerCircle', joinDate: '2024-01-13', status: 'active', reward: 500 },
  ]);

  const totalEarnings = referrals.reduce((sum, ref) => sum + ref.reward, 0);
  const referralUrl = `${window.location.origin}/register?ref=${referralCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    const text = `Join Zenith Games and start winning! Use my referral code: ${referralCode}`;
    const url = referralUrl;
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Referral Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white neon-text text-neon-purple mb-2">
          Referral Program
        </h2>
        <p className="text-gray-300">
          Invite friends and earn ₹500 for each successful referral!
        </p>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="game-card rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-neon-green neon-text mb-2">
            {referrals.length}
          </div>
          <div className="text-gray-400">Total Referrals</div>
        </div>
        <div className="game-card rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-neon-yellow neon-text mb-2">
            ₹{totalEarnings.toLocaleString()}
          </div>
          <div className="text-gray-400">Total Earnings</div>
        </div>
        <div className="game-card rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-neon-blue neon-text mb-2">
            ₹500
          </div>
          <div className="text-gray-400">Per Referral</div>
        </div>
      </div>

      {/* Referral Code Section */}
      <div className="game-card rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Your Referral Code</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-casino-darker rounded-lg p-4 border border-neon-purple/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple neon-text mb-2">
                  {referralCode}
                </div>
                <div className="text-gray-400 text-sm">Share this code with your friends</div>
              </div>
            </div>
            <button
              onClick={handleCopyCode}
              className="bg-neon-purple hover:bg-purple-600 px-4 py-2 rounded-lg text-white font-semibold transition-all hover:shadow-neon"
            >
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-casino-darker rounded-lg p-3 border border-gray-600">
              <div className="text-white text-sm font-mono break-all">
                {referralUrl}
              </div>
            </div>
            <button
              onClick={handleCopyUrl}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
            >
              Copy URL
            </button>
          </div>
        </div>
      </div>

      {/* Share Options */}
      <div className="game-card rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Quick Share</h3>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleShare('whatsapp')}
            className="bg-green-600 hover:bg-green-700 p-4 rounded-lg text-white font-semibold transition-all hover:shadow-neon transform hover:scale-105"
          >
            <div className="text-2xl mb-2">📱</div>
            WhatsApp
          </button>
          <button
            onClick={() => handleShare('telegram')}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-white font-semibold transition-all hover:shadow-neon transform hover:scale-105"
          >
            <div className="text-2xl mb-2">✈️</div>
            Telegram
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="bg-sky-600 hover:bg-sky-700 p-4 rounded-lg text-white font-semibold transition-all hover:shadow-neon transform hover:scale-105"
          >
            <div className="text-2xl mb-2">🐦</div>
            Twitter
          </button>
        </div>
      </div>

      {/* How It Works */}
      <div className="game-card rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <div className="text-white font-semibold">Share Your Code</div>
              <div className="text-gray-400 text-sm">Send your referral code to friends via social media, messaging apps, or direct link.</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <div className="text-white font-semibold">Friend Registers</div>
              <div className="text-gray-400 text-sm">Your friend creates an account using your referral code during registration.</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-neon-yellow rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <div className="text-white font-semibold">Earn Rewards</div>
              <div className="text-gray-400 text-sm">Receive ₹500 bonus instantly when your friend completes their first deposit.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral History */}
      {referrals.length > 0 && (
        <div className="game-card rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Referral History</h3>
          <div className="space-y-3">
            {referrals.map((referral) => (
              <div key={referral.id} className="flex items-center justify-between p-4 bg-casino-darker rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-neon-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-neon-purple font-bold">👤</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{referral.username}</div>
                    <div className="text-gray-400 text-sm">Joined: {referral.joinDate}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-neon-green font-bold">+₹{referral.reward}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    referral.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {referral.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Referral;