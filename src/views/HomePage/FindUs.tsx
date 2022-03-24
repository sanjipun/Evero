import { Link } from 'gatsby';
import React from 'react';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';

const FindUs: React.FC = () => {
  return (
    <section className="pt-28 pb-36 text-white">
      <div className="container mx-auto">
        <h1 className="py-10 text-4xl text-center font-audiowide gradient-text">Find US</h1>
        <div className="max-w-lg mx-auto place-items-center grid grid-cols-3 gap-10">
          {SOCIALS.map((social) => (
            <Link
              key={social.title}
              to={social.link}
              className="text-2xl flex flex-col items-center justify-center">
              {social.icon} {social.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindUs;

const SOCIALS: { title: string; link: string; icon: React.ReactNode }[] = [
  { title: 'Twitter', link: 'https://twitter.com', icon: <FaTwitter /> },
  { title: 'Telegram', link: 'https://telegram.com', icon: <FaTelegram /> },
  { title: 'Discord', link: 'https://discord.com', icon: <FaDiscord /> },
];
