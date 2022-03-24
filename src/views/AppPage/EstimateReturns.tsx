import Burn from '@components/Burn';
import Estimate from '@components/Estimate';
import React from 'react';
import Title from '../../components/Title';

interface EstimateReturnsProps {}

const EstimateReturns: React.FC<EstimateReturnsProps> = () => {
  return (
    <section className="text-white mt-10">
      <div className="grid grid-cols-1 gap-5 sm:gap-10 lg:grid-cols-2">
        <div>
          <Estimate />
        </div>
        <div>
          <Burn />
        </div>
      </div>
    </section>
  );
};

export default EstimateReturns;
