import ProjectInfoCard from '@components/ProjectInfoCard';
import React from 'react';
import EstimateReturns from './EstimateReturns';

const Dashboard: React.FC = () => {
  return (
    <section className="my-20 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECT_INFOS.map((info) => (
          <ProjectInfoCard
            key={info.title}
            title={info.title}
            value={info.value}
            moreInfo={info.moreInfo}
            priceChange={info.priceChange}
          />
        ))}
      </div>
      <EstimateReturns />
    </section>
  );
};

export default Dashboard;

const PROJECT_INFOS: {
  title: string;
  value: string | number | any;
  moreInfo?: string;
  priceChange?: string;
}[] = [
  {
    title: 'Market Cap',
    value: '$ 100,000',
  },
  {
    title: '$EVERO price',
    value: '$ 0.001',
    priceChange: '+ 0.03%',
  },
  {
    title: 'Total Burned',
    value: '$ 100,000',
    moreInfo: '12% of Total Supply',
  },
  {
    title: 'Liquidity Value',
    value: '$ 100,000',
  },
  {
    title: '24h Volume',
    value: '$ 100,000',
  },
  {
    title: 'Total Holders',
    value: '100,000',
  },
  {
    title: 'Risk Free Backing',
    value: '$ 100,000',
  },
];
