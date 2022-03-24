import { getRateForXDays } from '@utils/getRateForXDays';
import React from 'react';
import Title from './Title';

interface EstimateProps {}

const DATA: { label: string }[] = [
  {
    label: 'amount',
  },
  {
    label: 'price',
  },
  {
    label: 'days',
  },
  { label: 'balance' },
];

const Estimate: React.FC<EstimateProps> = () => {
  const [data, setData] = React.useState<{
    amount: number;
    price: number;
    days: number;
    balance: number;
  }>({ amount: 1, price: 0, days: 365, balance: 0 });
  const [EveroBalance, setEveroBalance] = React.useState<number>(0);

  const getValue = () => {
    setEveroBalance(getRateForXDays(data?.days) * data?.amount);
  };
  React.useEffect(() => {
    getValue();
  }, [data]);
  console.log(EveroBalance);
  return (
    <div className="bg-white bg-opacity-5 border border-white border-opacity-20 p-5 rounded-2xl">
      <Title>Estimated Returns</Title>
      <h1>Calculator</h1>
      <div className="grid grid-cols-3 gap-10 my-10">
        <div>
          <h1 className="text-white text-opacity-70">EVERO Price</h1>
          <span className="text-2xl">$0.001</span>
        </div>
        <div>
          <h1 className="text-white text-opacity-70">APY</h1>
          <span className="text-2xl">88488.6%</span>
        </div>
        <div>
          <h1 className="text-white text-opacity-70">Your EVERO Balance</h1>
          <span className="text-2xl">$0.001</span>
        </div>
      </div>
      <div className="mt-10">
        {DATA.map((datum) => (
          <div className="flex justify-between my-4">
            <label className="capitalize">
              {datum.label === 'balance' ? 'Balance USD' : datum.label}:
            </label>
            <input
              type="text"
              value={data[datum.label]}
              onChange={(e) => {
                setData((prev) => ({ ...prev, [datum.label]: Number(e.target.value) }));
              }}
              className="max-w-sm text-right w-full bg-white bg-opacity-10 border border-white border-opacity-50 rounded-xl py-2 px-5"
            />
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col">
        <span className="py-10">
          $Evero Balance:{' '}
          <span className="ml-5 text-2xl text-EveroGreen">{EveroBalance} $EVERO</span>
        </span>
        <span>
          Total Balance in USD: <span className="ml-5 text-2xl text-EveroGreen"> $100,000 USD</span>
        </span>
      </div>
    </div>
  );
};

export default Estimate;
