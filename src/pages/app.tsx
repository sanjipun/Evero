import SEO from '@components/SEO';
import React from 'react';
import { Tab } from '@headlessui/react';
import ConnectWallet from '@components/ConnectWallet';
import { Link } from 'gatsby';
import Dashboard from '@views/AppPage/Dashboard';
import Account from '@views/AppPage/Account';
import Swap from '@views/AppPage/Swap';
import Presale from '@views/AppPage/Presale';
import { IoIosHome } from '@react-icons/all-files/io/IoIosHome';
import { AiOutlineAppstore } from '@react-icons/all-files/ai/AiOutlineAppstore';
import { CgProfile } from '@react-icons/all-files/cg/CgProfile';
import { AiOutlineSwap } from '@react-icons/all-files/ai/AiOutlineSwap';
import { FcSalesPerformance } from '@react-icons/all-files/fc/FcSalesPerformance';

const app: React.FC = () => {
  return (
    <main className="text-white animate-fade-in">
      <SEO title="Evero | Admin Dashboard" />
      <section className="container mx-auto px-4 sm:px-10">
        <Tab.Group>
          <Tab.List className="py-10 flex items-center justify-between">
            <div className="hidden lg:flex items-center">
              <Link to="/" className="mr-6 cursor-pointer flex items-center">
                <IoIosHome />
                <span className="ml-1">Home</span>
              </Link>
              {TAB_TITLES.map((tab) => (
                <Tab className="mx-6 ml-0" key={tab.title}>
                  {({ selected }) => (
                    <div
                      className={`${
                        selected &&
                        'bg-white bg-opacity-10 border border-white border-opacity-20 text-pink-600 rounded-md'
                      } flex items-center px-4 py-2`}>
                      {tab.icon}
                      <span className="ml-1"> {tab.title}</span>
                    </div>
                  )}
                </Tab>
              ))}
            </div>
            <ConnectWallet />
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Dashboard />
            </Tab.Panel>
            <Tab.Panel>
              <Account />
            </Tab.Panel>
            <Tab.Panel>
              <Swap />
            </Tab.Panel>
            <Tab.Panel>
              <Presale />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </main>
  );
};

export default app;

const TAB_TITLES: { title: string; icon: React.ReactNode }[] = [
  { title: 'Dashboard', icon: <AiOutlineAppstore /> },
  { title: 'Account', icon: <CgProfile /> },
  { title: 'Swap', icon: <AiOutlineSwap /> },
  //{ title: 'Farming Wallets' },
  { title: 'Presale', icon: <FcSalesPerformance /> },
];
