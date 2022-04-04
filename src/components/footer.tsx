import * as React from 'react';
import { Fragment, useState, useCallback } from 'react';
// import Container from '@/components/container';
import * as styles from '@/styles/footer.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import SantisLogo from '../assets/santis-logo.svg';
import Success from '../assets/success.svg';
import { Dialog, Transition } from '@headlessui/react';
import Arrow from '../assets/arrow-left.svg';
import classNames from 'classnames';
import { Link } from 'gatsby';
import Input from './input';
import Twitter from '../assets/twitter.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Mail from '../assets/mail.svg';
import Phone from '../assets/phone.svg';
import Address from '../assets/address.svg';
import Container from './container';

const contacts = [
  {
    Icon: Twitter,
    to: 'https://twitter.com/santis_health',
  },
  {
    Icon: Facebook,
    to: 'https://www.facebook.com/santishealth',
  },
  {
    Icon: Instagram,
    to: 'https://www.instagram.com/santis_health',
  },
];

const FOOTER_LINKS = [
  {
    heading: 'Company',
    links: [
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Team',
        href: '/team',
      },
      {
        label: 'Services',
        href: '/#services',
      },

      {
        label: 'Packages',
        href: '/packages',
      },
    ],
  },
  {
    heading: 'Packages',
    links: [
      {
        label: 'Aspen',
        href: '/packages',
      },
      {
        label: 'Olympus',
        href: '/packages',
      },
      {
        label: 'Everest',
        href: '/packages',
      },

      {
        label: 'Everest Plus',
        href: '/packages',
      },
    ],
  },
  // {
  //   heading: 'Core Values',
  //   links: [
  //     {
  //       label: 'About',
  //       href: '/about',
  //     },
  //     {
  //       label: 'Team',
  //       href: '/team',
  //     },
  //     {
  //       label: 'Services',
  //       href: '/#services',
  //     },

  //     {
  //       label: 'Packages',
  //       href: '/packages',
  //     },
  //   ],
  // },
];

const NAV_LINKS = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Services',
    href: '/#services',
  },

  {
    label: 'Packages',
    href: '/packages',
  },
];

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSuccessModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const formSubmit = async () => {
    const res = await fetch(
      `${process.env.GATSBY_SANTIS_API_URL}/api/get-in-touch`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      },
    );
    const data = await res.json();
    console.log(data.message);

    if (data.status === 'success') {
      setTimeout(() => setIsOpen(true), 1000);
    }
  };
  return (
    <footer className="relative font-baskerville">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto "
          onClose={closeSuccessModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-[#101828] opacity-70" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="font-medium leading-6 text-center text-santis-purple"
                >
                  <Success className="max-w-[84px] mx-auto text-santis-gold mb-4" />
                  <span className="text-[30px] text-[#0A1829] font-medium">
                    Success
                  </span>
                </Dialog.Title>
                <div className="my-4 flex justify-center text-center">
                  <p className="text-sm  w-[75%] text-gray-500 ">
                    Your Email has been sent we will contact you soon!
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 text-sm font-medium text-[#fff] bg-santis-purple border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 w-[75%] focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.reload();
                      closeSuccessModal();
                    }}
                  >
                    Continue
                  </button>
                </div>

                {/* <div className="flex my-4 justify-center items-center">
                  <Arrow />
                  <p className="ml-2 text-gray-500">Back to Homepage</p>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div className="container relative z-10 flex flex-wrap w-full">
        <div className="relative  bg-[#2F2E2EA5] w-full md:w-1/3 xl:w-[600px] h-screen overflow-clip flex justify-center items-center">
          <StaticImage
            className="!absolute top-0 bottom-0 !-z-[10000]"
            alt=""
            src="../assets/lady.png"
            objectFit="cover"
          />
          {/* <SantisLogo className="max-w-[204px] text-white" /> */}
        </div>
        <div className="p-6 grid gap-6  content-center sm:-mt-20 items-center -order-1 md:order-1 flex-1 h-screen max-h-[1400px]">
          <div className="max-w-[550px] flex mx-auto flex-col gap-5">
            <h2 className="text-3xl">
              <span className="text-santis-purple">A Private & Secure</span>
              <br />
              <span className="text-santis-gold">
                Medical Concierge Service
              </span>
            </h2>
            <p>
              At SANTIS we privacy and security is our top priority, get access
              to private medical care at your own schedule.
            </p>
            <Link
              to="/packages"
              className="bg-santis-purple w-[147px] h-12 inline-flex justify-center items-center text-white"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-[40]">
        <div className="absolute top-0 h-[400px]  w-full transform skew-y-6 bg-santis-gold  -translate-y-[180px] -z-20"></div>

        <div className="absolute top-0 h-[400px] w-full transform skew-y-3 bg-[#5a0f39]  -translate-y-[100px] -z-10"></div>

        {/* <div className="absolute top-0 bottom-0 w-full bg-[#5a0f39] -z-30"></div> */}

        <div className="bg-[#5a0f39]">
          <Container>
            <div
              className={classNames('p-6 md:p-10 lg:p-16 container mx-auto')}
            >
              <div className="grid items-end gap-6 py-6 -mt-[340px] md:grid-cols-2 md:gap-10 lg:gap-16">
                <div className="grid order-1 gap-4 md:-order-1 max-w-[350px]">
                  <SantisLogo className="max-w-[204px] text-santis-gold" />
                  <p className="text-white">
                    Santis is a one-stop membership based premium healthcare
                    services. No insurance or corporate health system hassles.
                  </p>
                  <div className="">
                    <div className="flex gap-8">
                      {FOOTER_LINKS.map(({ heading, links }, index) => {
                        return (
                          <div>
                            <h4 className="my-4 text-sm text-santis-gold">
                              {heading}
                            </h4>
                            <ul className="flex flex-col gap-2 text-[#FFE6DE]">
                              {links.map(({ label, href }) => {
                                return (
                                  <li key={label}>
                                    <Link to={href}>{label}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="max-w-[570px]">
                  <form
                    id="contact"
                    onSubmit={(e) => {
                      e.preventDefault();
                      formSubmit();
                    }}
                    className="bg-[#f5f5f5] p-6 md:p-8  rounded-lg"
                  >
                    <h4 className="text-2xl capitalize font-baskerville text-santis-purple">
                      Get In Touch
                    </h4>
                    <p className="text-[#0F2522] opacity-70 mt-2">
                      Send us a message and we’ll be in touch soon
                    </p>
                    <Input
                      label="Full Name"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      label="Mobile"
                      id="mobile"
                      name="mobile"
                      required
                      type="tel"
                      placeholder="Enter Mobile No"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      label="Email"
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      label="Message"
                      id="message"
                      name="message"
                      type="textarea"
                      placeholder="Enter your message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 mt-6 text-white bg-santis-purple"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="">
                <div className="grid gap-6 py-6 md:grid-cols-2 md:gap-10 lg:gap-16">
                  <div className="">
                    <h4 className="my-4 text-sm text-santis-gold">
                      Connect with us
                    </h4>
                    <ul className="flex w-full gap-5 text-white">
                      {contacts.map(({ Icon: icon, to }) => {
                        return (
                          <li key={to}>
                            <Icon Icon={icon} to={to} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <hr className="md:hidden text-santis-gold bg-santis-gold" />
                  <div className="flex flex-col sm:flex-row justify-between gap-5 text-sm">
                    <div className="">
                      <h4 className="flex items-center gap-4 my-4 text-sm text-santis-gold">
                        <Icon Icon={Phone} /> <p>Call Us</p>
                      </h4>
                      <p className="text-white">
                        <a href="tel:+2347025120068">+234 702 512 0068</a>
                      </p>
                      <p className="text-white">
                        <a href="tel:+2347025120069">+234 702 512 0069</a>
                      </p>
                    </div>
                    <div className="">
                      <h4 className="flex items-center gap-4 my-4 text-sm text-santis-gold">
                        <Icon Icon={Mail} /> <p>Email Us</p>
                      </h4>
                      <p className="text-white flex flex-col">
                        <a href="mailto:admin@santimed.com">
                          info@santimed.com
                        </a>
                        <a href="https://santismed.com">www.santismed.com</a>
                      </p>
                    </div>
                    <div className="">
                      <h4 className="flex items-center gap-4 my-4 text-sm text-santis-gold">
                        <Icon Icon={Address} /> <p>Address</p>
                      </h4>
                      <p className="text-sm text-white max-w-[185px]">
                        Santis By Paelon
                        <br />
                        175B Moshood Olugbani Street Off Ligali Ayorinde Street
                        Victoria Island 101233 Lagos
                      </p>
                      <br />
                      <p className="text-sm text-white max-w-[185px]">
                        Mulliner Towers, 9 Alfred Rewane Road, <br />
                        Ikoyi, Lagos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function Icon({ Icon, to = '' }) {
  if (to)
    return (
      <a
        href={to}
        target="_blank"
        className="inline-block rounded-full bg-santis-gold"
      >
        <Icon className="m-4 w-[16px] text-base text-santis-purple" />
      </a>
    );
  return (
    <div className="inline-block rounded-full bg-santis-gold">
      <Icon className="m-3 text-base text-santis-purple" />
    </div>
  );
}
