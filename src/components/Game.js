import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';

const Game = () => {
  const [gameState, setGameState] = useState('waiting'); // 'waiting', 'active', 'result'
  const [currentResult, setCurrentResult] = useState(null);
  const [lastResults, setLastResults] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  const colors = [
    { name: 'Red', value: 'red', color: '#ff4444', bgClass: 'bg-red-500' },
    { name: 'Green', value: 'green', color: '#00ff80', bgClass: 'bg-green-500' },
    { name: 'Violet', value: 'violet', color: '#8000ff', bgClass: 'bg-purple-500' }
  ];

  useEffect(() => {
    // Start the first game
    setGameState('active');
  }, []);

  const generateRandomResult = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleCountdownComplete = () => {
    const result = generateRandomResult();
    setCurrentResult(result);
    setGameState('result');
    
    // Add to history
    const newGameEntry = {
      id: Date.now(),
      result: result.value,
      timestamp: new Date().toLocaleTimeString(),
      userPrediction: selectedColor,
      isWin: selectedColor === result.value
    };
    
    setGameHistory(prev => [newGameEntry, ...prev.slice(0, 9)]); // Keep last 10 results
    setLastResults(prev => [result.value, ...prev.slice(0, 4)]); // Keep last 5 results

    // Show result for 3 seconds, then start new game
    setTimeout(() => {
      setGameState('active');
      setCurrentResult(null);
      setSelectedColor(null);
    }, 3000);
  };

  const handleColorSelect = (colorValue) => {
    if (gameState === 'active') {
      setSelectedColor(colorValue);
    }
  };

  const getColorForResult = (colorValue) => {
    return colors.find(c => c.value === colorValue);
  };

  return (
    <div className="space-y-6">
      {/* Game Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white neon-text text-neon-blue mb-2">
          Color Prediction Game
        </h2>
        <p className="text-gray-300">
          Predict the next color and win big! Game starts every minute.
        </p>
      </div>

      {/* Game Area */}
      <div className="game-card rounded-xl p-8 text-center">
        {/* Countdown */}
        <div className="mb-8">
          <Countdown 
            onComplete={handleCountdownComplete} 
            isActive={gameState === 'active'} 
          />
        </div>

        {/* Game Status */}
        <div className="mb-6">
          {gameState === 'active' && (
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">Choose Your Color</h3>
              <p className="text-gray-400">Select a color before time runs out!</p>
            </div>
          )}
          
          {gameState === 'result' && currentResult && (
            <div className="result-animation">
              <h3 className="text-2xl font-bold text-white mb-4">Result</h3>
              <div className="flex items-center justify-center space-x-4">
                <div 
                  className={`w-20 h-20 rounded-full ${currentResult.bgClass} shadow-neon-lg flex items-center justify-center`}
                  style={{ color: currentResult.color }}
                >
                  <span className="text-white font-bold text-lg">
                    {currentResult.name[0]}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">{currentResult.name}</div>
                  {selectedColor && (
                    <div className={`text-sm ${selectedColor === currentResult.value ? 'text-green-400' : 'text-red-400'}`}>
                      {selectedColor === currentResult.value ? '🎉 You Won!' : '😔 You Lost!'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Color Selection */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorSelect(color.value)}
              disabled={gameState !== 'active'}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedColor === color.value
                  ? `border-white shadow-neon bg-${color.value === 'red' ? 'red' : color.value === 'green' ? 'green' : 'purple'}-500/20`
                  : 'border-gray-600 hover:border-gray-400'
              } ${
                gameState === 'active' ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed opacity-50'
              }`}
              style={{ borderColor: selectedColor === color.value ? color.color : undefined }}
            >
              <div 
                className={`w-16 h-16 rounded-full ${color.bgClass} mx-auto mb-3 shadow-lg`}
                style={{ boxShadow: selectedColor === color.value ? `0 0 20px ${color.color}` : undefined }}
              ></div>
              <div className="text-white font-semibold">{color.name}</div>
            </button>
          ))}
        </div>

        {/* Last Results */}
        {lastResults.length > 0 && (
          <div className="border-t border-gray-600 pt-6">
            <h4 className="text-lg font-semibold text-white mb-3">Last Results</h4>
            <div className="flex justify-center space-x-2">
              {lastResults.map((result, index) => {
                const colorInfo = getColorForResult(result);
                return (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full ${colorInfo.bgClass} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {colorInfo.name[0]}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Game History */}
      {gameHistory.length > 0 && (
        <div className="game-card rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Game History</h3>
          <div className="space-y-2">
            {gameHistory.slice(0, 5).map((game) => {
              const resultColor = getColorForResult(game.result);
              return (
                <div key={game.id} className="flex items-center justify-between p-3 bg-casino-darker rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full ${resultColor.bgClass}`}></div>
                    <span className="text-white">{resultColor.name}</span>
                    <span className="text-gray-400 text-sm">{game.timestamp}</span>
                  </div>
                  {game.userPrediction && (
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      game.isWin ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {game.isWin ? 'WIN' : 'LOSS'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;