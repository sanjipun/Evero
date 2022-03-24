import React from 'react';
import Title from './Title';

interface BurnProps {}

const Burn: React.FC<BurnProps> = () => {
  return (
    <div className="bg-white bg-opacity-5 border border-white border-opacity-20 p-5 rounded-2xl">
      <Title>Weekly Burn</Title>
      <div className="mt-10">
        <BurnText title="Total Burned" amount="100,000" more="13% of total supply"></BurnText>
        <BurnText title="Next Burn Amount" amount="100,000"></BurnText>
        <BurnText title="Next Burn Countdown" time="7 days"></BurnText>
      </div>
    </div>
  );
};

export default Burn;

type BurnTextType = {
  title: string;
  amount?: string;
  time?: string;
  more?: string;
};

const BurnText: React.FC<BurnTextType> = ({ title, amount, time, more }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="my-4 text-xl">{title}</h1>
      <div className="flex flex-col items-end">
        <h1 className="text-EveroGreen">{amount && amount}</h1>
        <h1>{time && time}</h1>
        <h1>{more && more}</h1>
      </div>
    </div>
  );
};
