import React from 'react';

interface NumberingProps {
  children: React.ReactNode;
}

const Numbering: React.FC<NumberingProps> = ({ children }) => {
  return (
    <div>
      <span className="text-100 text-white text-opacity-50 font-audiowide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
    </div>
  );
};

export default Numbering;
