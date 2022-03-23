import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import About from '@views/HomePage/About';
import EarnInfo from '@views/HomePage/EarnInfo';
import FindUs from '@views/HomePage/FindUs';
import Landing from '@views/HomePage/Landing';
import Tokenomics from '@views/HomePage/Tokenomics';
import * as React from 'react';

const IndexPage = () => {
  return (
    <main
      style={{ backgroundImage: `url("/images/bg.svg")` }}
      className="bg-no-repeat bg-cover animate-fade-in">
      <SEO title="Evero | Auto-Compounding | Auto-Staking" />
      <Navbar />
      <Landing />
      <About />
      <EarnInfo />
      <Tokenomics />
      <FindUs />
    </main>
  );
};

export default IndexPage;
