import { getRateForXDays } from '@utils/getRateForXDays';
import React from 'react';

const Account: React.FC = () => {
  const ACCOUNT_INFO: { title: string; value: number | string; moreInfo?: string }[] = [
    {
      title: 'Next Reward Amount',
      value: 1000,
      moreInfo: 'Countdown to next interest',
    },
    {
      title: 'APY',
      value: '88488.6%',
    },
    {
      title: 'Your Balance',
      value: 1000,
      moreInfo: '10000 $EVERO',
    },
    {
      title: 'Your Earnings/day',
      value: 10,
      moreInfo: '10 $EVERO',
    },
    {
      title: 'Next Reward Amount',
      value: 10,
    },
    {
      title: 'Next Reward Amount USD',
      value: 10,
    },
    {
      title: 'Next Reward Yield',
      value: getRateForXDays(30 / 1440).toFixed(4),
    },
    {
      title: 'Your Share/MarketCap',
      value: 0.0001,
    },
  ];

  return (
    <div className="animate-fade-in my-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
      {ACCOUNT_INFO.map((account) => (
        <div
          key={account.title}
          className="flex justify-between items-center p-5 bg-white bg-opacity-5 border rounded-xl border-white border-opacity-20">
          <h1 className="my-4 text-xl">{account.title}</h1>
          <div className="flex flex-col items-end">
            <h1 className="text-EveroGreen">{account.value}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Account;
