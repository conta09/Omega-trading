"use client"
import { useState } from 'react';
import Layout from '../components/Layout';
import TransactionHistory from '../components/TransactionHistory';
const Home = () => {
  const [content, setContent] = useState('home');

  const renderContent = () => {
    switch (content) {
      case 'home':
        return <p>Main content for Home</p>;
      case 'wallet':
        return <p>Main content for Wallet</p>;
      case 'transactionHistory':
        return <TransactionHistory />;
      case 'referrals':
        return <p>Main content for Referrals</p>;
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
