import React from 'react';

const Landing: React.FC = () => {
  return (
    <div className="pt-14">
      <section className="container mx-auto px-4 sm:px-10 py-52 text-white grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-4xl leading-10 md:leading-65 font-medium gradient-text">
            Automatic Staking and Compounding in Your Wallet!{' '}
          </h1>
          <ul className="mt-12 leading-8 list-disc list-inside">
            <li>Fixed APY - 88,488.6%</li>
            <li>Automatic Staking and Compounding in Your Wallet!</li>
            <li>Get Rewards Every Hour / 24 times Daily!</li>
            <li>Multichain Farming to support high reward.</li>
            <li>Burning 2 - 4% supply every week.</li>
          </ul>
          <Button link="/whitepaper">Whitepaper</Button>
          <Button link="/swap" buy>
            Buy $Evero
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/images/EveroWhite.svg" />
          <h1
            className="tracking-10 cursor-pointer text-6xl sm:text-100 text-shadow-logo text-white"
            style={{ fontFamily: 'Audiowide' }}>
            Ev<span className="skew-y-3">e</span>ro
          </h1>
          <div className="text-center">Reach the new height of Financial Freedom with us.</div>
          <h1>Multi-Chain Farm</h1>
        </div>
      </section>
    </div>
  );
};

export default Landing;

type ButtonType = {
  children: React.ReactNode;
  buy?: boolean;
  link: string;
};
const Button: React.FC<ButtonType> = ({ children, buy, link }) => {
  return (
    <button
      className={`ml-0 m-6 ${
        buy ? 'bg-green-600 hover:bg-green-400' : 'bg-pink-600 hover:bg-pink-400'
      }  rounded-md px-8 py-4 transition-all duration-300 ease-in`}>
      {children}
    </button>
  );
};
