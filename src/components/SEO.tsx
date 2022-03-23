import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/images/EveroWhite.svg" sizes="16x16" />
    </Helmet>
  );
};

export default SEO;
