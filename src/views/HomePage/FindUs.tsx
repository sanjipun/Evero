import { Link } from 'gatsby';
import React from 'react';

const FindUs: React.FC = () => {
  return (
    <section className="pt-28 pb-36 text-white">
      <div className="container mx-auto">
        <h1 className="py-10 text-4xl text-center font-audiowide">Find US</h1>
        <div className="max-w-lg mx-auto place-items-center grid grid-cols-3 gap-10">
          {SOCIALS.map((social) => (
            <Link key={social.title} to={social.link}>
              {social.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindUs;

const SOCIALS: { title: string; link: string }[] = [
  { title: 'Twitter', link: 'https://twitter.com' },
  { title: 'Telegram', link: 'https://telegram.com' },
  { title: 'Discord', link: 'https://discord.com' },
];
