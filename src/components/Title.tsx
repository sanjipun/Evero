import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-2xl font-audiowide">{children}</h1>;
};

export default Title;
