import Numbering from '@components/Numbering';
import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="pb-36 text-white">
      <div className="container mx-auto px-4 sm:px-10">
        <h1 className="text-center text-4xl font-medium font-audiowide relative">
          <Numbering>01</Numbering>
          <span className="gradient-text">Evero Autostaking Protocol</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-24">
          <div className="text-center leading-65 flex items-center flex-col justify-center">
            <h1 className="text-5xl sm:text-7xl text-EveroGreen text-glow font-audiowide">
              88,488.6%
            </h1>
            <h3>Fixed Staking APY</h3>
          </div>
          <div className="text-center leading-8 lg:text-left mx-auto">
            <h1 className="text-EveroGreen text-lg">ABOUT </h1>
            <p className="w-full mx-auto lg:mx-0 sm:w-10/12 md:w-9/12">
              <span className="font-audiowide">Evero</span> Finance is transforming DeFi with the
              Evero Autostaking Protocol (TAP) that delivers the industry’s highest fixed APY,
              rebasing rewards every 30 minutes, and a simple buy-hold-earn system that grows your
              portfolio in your wallet, fast.
            </p>
          </div>
        </div>
        <p className="mt-28 text-center break-words">
          <span className="font-audiowide">$Evero</span> Contract:
          0xba96731324de188ebc1ed87ca74544ddebc07d7f
        </p>
        <h1 className="max-w-2xl leading-10 w-full text-center mx-auto mt-16 text-4xl">
          <span className="font-audiowide">Evero</span> rewards holders with automatic compounding
          interest, increasing their $EVERO holdings over time.
        </h1>
      </div>
    </section>
  );
};

export default About;
