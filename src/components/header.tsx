import React, { useState } from 'react';
import Container from '@/components/container';
import SantisLogo from '../assets/santis-logo.svg';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Menu from '../assets/menu.svg';

const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Packages',
    href: '/packages',
  },
];

const headerCTAs = [
  {
    label: 'Start Membership',
    href: '/packages',
    className: 'bg-[#5A0F39] text-white',
  },
  {
    label: 'Get In touch',
    href: '#contact',
    className: 'bg-[#f6b88a] text-black',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center pt-8 md:absolute">
      <Container className="hidden p-6 lg:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 grow">
            <Link
              to="/"
              className="text-santis-gold w-[110px] block flex-shrink-0"
            >
              <SantisLogo />
            </Link>

            <ul className="flex gap-12 text-white">
              {NAV_LINKS.map(({ label, href }) => {
                return (
                  <li key={label}>
                    <Link to={href}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="flex items-center flex-shrink-0 gap-3 text-sm">
            {headerCTAs.map(({ label, href, className }) => {
              return (
                <li key={label}>
                  <Link
                    to={href}
                    className={classNames('px-5 py-4', className)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* <Link className="" to="/">
              Start Membership
            </Link>
            <Link className="bg-[#f6b88a] text-black px-5 py-4" to="/">
              Get In touch
            </Link> */}
          </ul>
        </div>
      </Container>
      <Container className="block w-full lg:hidden bg-santis-purple">
        <div className="flex items-center justify-between py-6 text-santis-gold">
          <button
            title="Toggle menu"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="p-2 text-lg focus:outline-none focus:ring-1 focus:ring-santis-gold"
          >
            <Menu aria-hidden="true" />
          </button>
          <SantisLogo className="w-24" title="logo" />
          <div className=""></div>
        </div>
        {isOpen && (
          <div className="">
            <ul className="flex flex-col gap-5 text-white">
              {NAV_LINKS.map(({ label, href }) => {
                return (
                  <li key={label} className="ml-3 last-of-type:pb-5">
                    <Link to={href}>{label}</Link>
                  </li>
                );
              })}

              {headerCTAs.map(({ label, href }) => {
                return (
                  <li key={label} className="ml-3 last-of-type:pb-5">
                    <Link to={href}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
