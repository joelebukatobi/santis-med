import React from 'react';
import Container from '@/components/container';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

const benefits = [
  {
    title: 'Coordinated Care',
    items: [
      'Continuity of care by your dedicated concierge care coodinator',
      'Enhanced communication between healthcare provider and you',
      'Emergency contact for you and your wards School emergency contact for your children',
      'Developing and maintaining a health calendar just for you Medical escort and medical evacuation services',
      'Emergency collections: Pre and Post hospital care; Ambulance transport, Evacuation Services',
    ],
  },
  {
    title: 'Specialist Care',
    items: [
      'Annual executive health assessment',
      'Preventative medical care',
      'Paediatric and Geriatric care',
      'Palliative and hospice care',
    ],
  },
  {
    title: 'Access',
    items: [
      'Outstanding medical teams',
      'Robust provider network',
      'VIP access to any healthcare provider in the jurisdiction that we operate in',
    ],
  },
  {
    title: 'Anywhere, Anytime',
    items: [
      'Your relationship manager is available 24/7 to ensure all your healthcare needs are met. We bring the healthcare to you',
    ],
  },
  {
    title: 'Timely Appointments',
    items: [
      'Effective time management placing you ahead of the queue.',
      'Same day appointments',
    ],
  },
];
const BenefitsSection = () => {
  return (
    <div className="py-20">
      <div className="container p-6 mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-bold text-santis-purple">
          benefits to you
        </h2>
        <div className="h-2 w-36 bg-santis-gold"></div>
        <div className="grid w-full gap-6 mt-6 md:grid-cols-3">
          <BenefitCard {...benefits[0]} l />
          <div className="">
            <BenefitCard {...benefits[1]} />
            <BenefitCard {...benefits[2]} />
          </div>
          <div>
            <BenefitCard {...benefits[3]} />
            <BenefitCard {...benefits[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

function BenefitCard({ title, items, l = false }) {
  return (
    <div className=" flex items-center justify-center relative file:px-7 py-9 bg-santis-pink rounded-sm mt-4 min-h-[303px] ">
      <StaticImage
        className="w-[60%] absolute border-2 opacity-10 "
        alt=""
        src="../assets/santis-logo-three.png"
      />
      <div className="relative z-10 p-6">
        <h3 className="my-4 text-xl font-bold text-black">{title}</h3>
        <ul className="">
          {items.map((item: string, i) => (
            <li
              className={classNames({
                'mb-8': l,
              })}
              key={i}
            >
              <p className="text-[#374565]">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
