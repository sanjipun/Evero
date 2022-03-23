import React from 'react';

interface ProjectInfoCardProps {
  title: string;
  value: string | number | any;
  moreInfo?: string;
  priceChange?: string;
}

const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({
  title,
  value,
  moreInfo,
  priceChange,
}) => {
  return (
    <div className="bg-white bg-opacity-5 border border-white border-opacity-30 rounded-xl p-5">
      <h1 className="text-white text-opacity-60">
        {title}{' '}
        <span className="text-sm">
          {priceChange && `(${priceChange})`}
          {moreInfo && `(${moreInfo})`}
        </span>
      </h1>
      <h3 className="text-2xl">{value}</h3>
    </div>
  );
};

export default ProjectInfoCard;
