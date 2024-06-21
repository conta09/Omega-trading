"use client"
import { useState } from 'react';
import Layout from '../components/Layout';
import TransactionHistory from '../components/TransactionHistory';
import ReferralLink from '../components/ReferralLink';
import Wallet from '../components/Wallet';
const Home = () => {
  const [content, setContent] = useState('home');

  const renderContent = () => {
    switch (content) {
      case 'home':
        return <p>Main content for Home</p>;
      case 'wallet':
        return <Wallet />;
      case 'transactionHistory':
        return <TransactionHistory />;
      case 'referrals':
        return <ReferralLink />;
      default:
        return <p>Main content</p>;
    }
  };

  return (
    <Layout setContent={setContent}>
      {renderContent()}
    </Layout>
  );
};

export default Home;
