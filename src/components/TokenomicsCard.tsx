import React from 'react';

interface TokenomicsCardProps {
  title: string;
  description: string;
}

const TokenomicsCard: React.FC<TokenomicsCardProps> = ({ title, description }) => {
  return (
    <div className="max-w-md w-full text-center bg-white max-h-96 h-full p-4 sm:p-10 bg-opacity-10 rounded-xl">
      <h1 className="font-audiowide text-2xl mb-5">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TokenomicsCard;
