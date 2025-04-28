import React from 'react';
import Footer from '../components/Footer';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="flex-1 flex justify-center items-center">
        <h2 className="text-xl text-gray-700">{title}（仮置き）</h2>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
