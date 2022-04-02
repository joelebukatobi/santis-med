import React from 'react';
// import lady from '@/assets/lady.png';
// import bed from '@/assets/bed.png';
// import discuss from '@/assets/discuss.png';
import { StaticImage } from 'gatsby-plugin-image';

function Afterconcept() {
  return (
    <div
      id="services"
      className="container md:mt-[100px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 sm:gap-1 text-white"
    >
      <div className="flex flex-col justify-end relative h-[80vmin] max-h-[700px] bg-[#000000B3] p-9">
        <StaticImage
          className="!absolute top-0 bottom-0 left-0 right-0 -z-10"
          alt=""
          src="../assets/unlimited-access.jpg"
        />
        <p>
          <span className="text-xs">Unrivalled</span>
        </p>
        <h3>
          <span className="text-3xl font-bold text-santis-pink">Access</span>
        </h3>
        <p>
          Connecting you with the right specialist from our network of world
          renowned doctors and surgeons
        </p>
      </div>
      <div className="flex flex-col justify-end relative h-[80vmin] max-h-[700px] bg-[#000000B3] p-9">
        <StaticImage
          className="!absolute top-0 bottom-0 left-0 right-0 -z-10"
          alt=""
          src="../assets/slider-two.jpg"
        />
        <p>
          <span className="text-xs">Unlimited</span>
        </p>
        <h3>
          <span className="text-3xl font-bold text-santis-pink">Service</span>
        </h3>
        <p>
          At home, in the office, or in hospital, members are seen rapidly and
          discreetly within 24 hours
        </p>
      </div>
      <div className="flex flex-col justify-end relative h-[80vmin] max-h-[700px] bg-[#000000B3] p-9">
        <StaticImage
          className="!absolute top-0 bottom-0 left-0 right-0 -z-10"
          alt=""
          src="../assets/unmatched-experience.jpg"
        />
        <p>
          <span className="text-xs">Unmatched</span>
        </p>
        <h3>
          <span className="text-3xl font-bold text-santis-pink">
            Experience
          </span>
        </h3>
        <p>
          Our multilingual concierges are skilled doctors, that will personalise
          and enhance every aspect of your health journey
        </p>
      </div>
    </div>
  );
}
export default Afterconcept;
