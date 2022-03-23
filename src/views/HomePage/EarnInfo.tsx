import Numbering from '@components/Numbering';
import React from 'react';

const EarnInfo: React.FC = () => {
  return (
    <section className="py-36 text-white text-center">
      <div className="container mx-auto px-4 sm:px-10">
        <h1 className="text-4xl font-audiowide relative">
          <Numbering>02</Numbering>
          How much can I earn?
        </h1>

        <h1 className="max-w-2xl mx-auto mt-16 text-3xl">
          At the end of the year and with $1 USD of $EVERO invested. You can earn up to $88,488.6
          USD of $EVERO at 88,488.6% APY*.
        </h1>
        <p className="text-white text-xs text-opacity-70 mt-20 max-w-lg mx-auto">
          *Earnings are calculated in a scenario where the RFV sustains the rebase reward for 365
          days.
        </p>
      </div>
    </section>
  );
};

export default EarnInfo;
