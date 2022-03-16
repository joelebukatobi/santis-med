import React from 'react';
// import CogNac from '@/assets/cognac.png';
import { StaticImage } from 'gatsby-plugin-image';

function ConceptSection() {
  return (
    <div className="flex items-end w-full fmin-h-screen">
      <div className="container p-6 mx-auto">
        <div className="self-center mx-auto w-fit">
          <h2 className="my-3 text-4xl font-bold uppercase text-santis-purple">
            The beaver <span className="text-santis-gold">concept</span>
          </h2>
          <p className="text-lg max-w-[1000px]">
            Beavers are ecological engineers and keystone players in an
            ecosystem. They provide essential services that allow others to
            thrive At Santis, we offer beaver services to our clients by
            providing premium concierge services and navigating the complex
            healthcare industrygiving our clients peace of mind.
          </p>
        </div>

        <div className="flex items-center justify-center w-full gap-6 mt-10 overflow-auto md:gap-24">
          <StaticImage
            objectFit="contain"
            className="flex-shrink-0 w-40"
            alt=""
            src="../assets/pathcare.png"
          />
          <StaticImage
            objectFit="contain"
            className="flex-shrink-0 w-40"
            alt=""
            src="../assets/bupa.png"
          />
          <StaticImage
            objectFit="contain"
            className="flex-shrink-0 w-40"
            alt=""
            src="../assets/cigna.png"
          />
          <StaticImage
            objectFit="contain"
            className="flex-shrink-0 w-40"
            alt=""
            src="../assets/gbg.png"
          />
          <StaticImage
            objectFit="contain"
            className="flex-shrink-0 w-40"
            alt=""
            src="../assets/safe_care.png"
          />
        </div>
      </div>
    </div>
  );
}

export default ConceptSection;
