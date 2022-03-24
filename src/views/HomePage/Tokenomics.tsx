import Numbering from '@components/Numbering';
import TokenomicsCard from '@components/TokenomicsCard';
import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="text-white py-36">
      <div className="container mx-auto px-4 sm:px-10">
        <h1 className="text-4xl text-center font-audiowide relative">
          <Numbering>03</Numbering>
          <span className="gradient-text">TOKENOMICS</span>
        </h1>
        <p className="mx-auto max-w-xl text-center py-14">
          $EVERO is a BEP-20 token with an elastic supply that rewards holders using a positive
          rebase formula.
        </p>
        <div className="grid place-items-center gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {TOKENOMICS.map((tokenomic) => (
            <TokenomicsCard
              key={tokenomic.title}
              title={tokenomic.title}
              description={tokenomic.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

const TOKENOMICS: { title: string; description: string }[] = [
  {
    title: 'Automatic LP',
    description:
      "5% of the trading fees return to the liquidity ensuring $EVERO's increasing collateral value.",
  },
  {
    title: 'Risk Free Value',
    description:
      '5% of the trading fees are redirected to the RFV which helps sustain and back the staking rewards provided by the positive rebase.',
  },
  {
    title: 'Treasury',
    description:
      '3% of the purchases and 8% of the sales go directly to the treasury which supports the RFV.',
  },
];
