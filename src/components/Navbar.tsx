import { Link } from 'gatsby';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Links = [
  { title: 'Whitepaper', link: '/whitepaper' },
  { title: 'Telegram', link: '/telegram' },
  { title: 'Twitter', link: '/twitter' },
];
const Navbar: React.FC = () => {
  return (
    <section className="relative container mx-auto text-white">
      <nav className="px-4 sm:px-10 absolute top-0 left-0 py-10 flex justify-between items-center w-full">
        <Link
          to="/"
          className="tracking-10 cursor-pointer text-3xl text-shadow-logo text-white flex items-center"
          style={{ fontFamily: 'Audiowide' }}>
          <img src="/images/EveroWhite.svg" className="w-14 h-14 mr-2" />
          Ev<span className="skew-y-3">e</span>ro
        </Link>
        <div className="hidden md:block">
          <ScrollLink
            className="cursor-pointer"
            to="tokenomics"
            smooth={true}
            offset={50}
            duration={500}
            isDynamic={true}
            spyThrottle={500}>
            Tokenomics
          </ScrollLink>
          {Links.map((link) => (
            <NavLink link={link.link} key={link.title}>
              {link.title}
            </NavLink>
          ))}
          <Link
            to="/app"
            className="ml-6 bg-pink-600 rounded-md px-6 py-3 hover:bg-pink-900 transition-all duration-300 ease-in">
            Open App
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

type NavLinksTypes = {
  children: React.ReactNode;
  link: string;
};
const NavLink: React.FC<NavLinksTypes> = ({ children, link }) => {
  return (
    <Link to={link} className="mx-6 hover:text-pink-600 transition-all duration-300 ease-in">
      {children}
    </Link>
  );
};
