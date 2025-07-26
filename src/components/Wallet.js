import React, { useState } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(10000);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', amount: 10000, timestamp: '2024-01-15 10:30:00', status: 'completed' },
    { id: 2, type: 'withdraw', amount: 500, timestamp: '2024-01-14 15:45:00', status: 'completed' },
    { id: 3, type: 'deposit', amount: 2000, timestamp: '2024-01-13 09:15:00', status: 'completed' },
  ]);

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (amount > 0) {
      setBalance(prev => prev + amount);
      const newTransaction = {
        id: Date.now(),
        type: 'deposit',
        amount: amount,
        timestamp: new Date().toLocaleString(),
        status: 'completed'
      };
      setTransactions(prev => [newTransaction, ...prev]);
      setDepositAmount('');
      setShowDeposit(false);
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= balance) {
      setBalance(prev => prev - amount);
      const newTransaction = {
        id: Date.now(),
        type: 'withdraw',
        amount: amount,
        timestamp: new Date().toLocaleString(),
        status: 'completed'
      };
      setTransactions(prev => [newTransaction, ...prev]);
      setWithdrawAmount('');
      setShowWithdraw(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Wallet Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white neon-text text-neon-green mb-2">
          Your Wallet
        </h2>
        <p className="text-gray-300">
          Manage your gaming balance and transactions
        </p>
      </div>

      {/* Balance Card */}
      <div className="game-card rounded-xl p-8 text-center">
        <div className="mb-6">
          <h3 className="text-lg text-gray-400 mb-2">Available Balance</h3>
          <div className="text-5xl font-bold text-neon-yellow neon-text">
            ₹{balance.toLocaleString()}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setShowDeposit(true)}
            className="bg-gradient-to-r from-neon-green to-green-600 hover:from-green-600 hover:to-neon-green px-6 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-neon transform hover:scale-105"
          >
            💰 Deposit
          </button>
          <button
            onClick={() => setShowWithdraw(true)}
            className="bg-gradient-to-r from-neon-blue to-blue-600 hover:from-blue-600 hover:to-neon-blue px-6 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-neon transform hover:scale-105"
          >
            💸 Withdraw
          </button>
        </div>
      </div>

      {/* Deposit Modal */}
      {showDeposit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="game-card rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Deposit Funds</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Amount (₹)</label>
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full px-4 py-2 bg-casino-darker border border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none"
                  placeholder="Enter amount"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[500, 1000, 5000].map(amount => (
                  <button
                    key={amount}
                    onClick={() => setDepositAmount(amount.toString())}
                    className="px-3 py-2 bg-casino-accent hover:bg-casino-card text-white rounded-lg transition-colors"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleDeposit}
                  disabled={!depositAmount || parseFloat(depositAmount) <= 0}
                  className="flex-1 bg-neon-green hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-lg text-white font-semibold transition-colors"
                >
                  Confirm Deposit
                </button>
                <button
                  onClick={() => setShowDeposit(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdraw && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="game-card rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Withdraw Funds</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Amount (₹)</label>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  max={balance}
                  className="w-full px-4 py-2 bg-casino-darker border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  placeholder="Enter amount"
                />
                <p className="text-sm text-gray-400 mt-1">Available: ₹{balance.toLocaleString()}</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[500, 1000, Math.min(5000, balance)].map(amount => (
                  <button
                    key={amount}
                    onClick={() => setWithdrawAmount(amount.toString())}
                    disabled={amount > balance}
                    className="px-3 py-2 bg-casino-accent hover:bg-casino-card disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleWithdraw}
                  disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0 || parseFloat(withdrawAmount) > balance}
                  className="flex-1 bg-neon-blue hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-lg text-white font-semibold transition-colors"
                >
                  Confirm Withdraw
                </button>
                <button
                  onClick={() => setShowWithdraw(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transaction History */}
      <div className="game-card rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Transaction History</h3>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-casino-darker rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'deposit' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {transaction.type === 'deposit' ? '💰' : '💸'}
                </div>
                <div>
                  <div className="text-white font-semibold capitalize">
                    {transaction.type}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {transaction.timestamp}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${
                  transaction.type === 'deposit' ? 'text-green-400' : 'text-blue-400'
                }`}>
                  {transaction.type === 'deposit' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                </div>
                <div className="text-green-400 text-sm capitalize">
                  {transaction.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;