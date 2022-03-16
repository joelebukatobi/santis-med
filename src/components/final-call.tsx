import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
function FinalCall() {
  return (
    <div className="bg-[#040814]  text-white">
      <div className="container relative flex flex-wrap items-center min-h-screen max-w-[1400px] mx-auto ">
        <div className="grid w-full max-w-xl gap-2 z-[1]">
          <p className="text-4xl">
            The <span className="text-santis-gold">benefits of membership</span>{' '}
            <wbr />
            are infinite
          </p>
          <p>
            Santis is a one-stop membership based premium healthcare services.
            No insurance or corporate health system hassles,
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center h-12 bg-santis-purple w-36"
            >
              Join Now
            </Link>
            <button className="inline-flex items-center justify-center h-12 border border-white w-36">
              Learn More
            </button>
          </div>
        </div>
        <StaticImage
          className="right-0 md:absolute"
          alt=""
          src="../assets/cards.png"
        />
      </div>
    </div>
  );
}

export default FinalCall;
