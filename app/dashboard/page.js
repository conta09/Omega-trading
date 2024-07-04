"use client"
import { useState } from 'react';
import Layout from '../components/Layout';
import TransactionHistory from '../components/TransactionHistory';
import ReferralLink from '../components/ReferralLink';
import Wallet from '../components/Wallet';
import HomePage from '../components/HomePage';
const Home = () => {
  const [content, setContent] = useState('home');
  const [balance, setBalance] = useState(0); // Add balance state






  
  const renderContent = () => {
    switch (content) {
      case 'home':
        return <HomePage />;
      case 'wallet':
        return <Wallet balance={balance} updateBalance={updateBalance} />; // Pass balance and updateBalance
      case 'transactionHistory':
        return <TransactionHistory />;
      case 'referrals':
        return <ReferralLink />;
      default:
        return <HomePage />;
    }
  };
  const handleDepositClick = () => {
    setContent('wallet');
  };

  const handleWithdrawClick = () => {
    setContent('wallet');
  };

  const updateBalance = (amount, action) => {
    const amountNumber = parseFloat(amount);
    if (action === 'Deposit') {
      setBalance(prevBalance => prevBalance + amountNumber);
    } else if (action === 'Withdraw') {
      setBalance(prevBalance => prevBalance - amountNumber);
    }
  };

  return (
    <Layout
      setContent={setContent}
      handleDepositClick={handleDepositClick}
      handleWithdrawClick={handleWithdrawClick}
      balance={balance} // Pass balance to Layout
    >
      {renderContent()}
    </Layout>
  );
};

export default Home;