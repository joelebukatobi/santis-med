import React, { useState } from 'react';
import Container from '@/components/container';
import { StaticImage } from 'gatsby-plugin-image';
import ArrowRight from '@/assets/arrow-right.svg';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Link } from 'gatsby';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLoaded, setSetLoaded] = useState(false);
  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: 'snap',
    slides: { perView: 'auto' },
    created() {
      setSetLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="">
      <div className="relative flex items-center w-full h-full min-h-screen pt-28">
        <StaticImage
          className="!absolute top-0 bottom-0 left-0 right-0 -z-10"
          alt=""
          src="../assets/hero.jpg"
        />
        <Container className="px-6 md:px-10">
          <div className="flex flex-col justify-center text-white">
            <h1 className="flex flex-col gap-2 font-trajan">
              <span className="text-[#CC8434] text-4xl ">
                Luxury medical Concierge
              </span>
              <span className="text-2xl">We Make It Happen</span>
            </h1>

            <Link
              to="/packages"
              className="flex items-center justify-center px-4 py-3 mt-8 text-sm capitalize border w-fit"
            >
              Start Membership
            </Link>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex flex-wrap justify-center mx-auto -translate-y-28 ">
            <div className="flex max-w-[500px] overflow-hidden  ">
              <div className="relative w-full px-16 text-white bg-santis-purple shrink-0">
                <StaticImage
                  className="absolute h-full top-0 opacity-10"
                  alt=""
                  src="../assets/santis-logo-two.svg"
                />
                <h2 className="pt-16 relative z-2 my-4 text-xl font-bold text-santis-gold">
                  Welcome to santis
                </h2>
                <p className="pb-16 relative z-2">
                  We recognize that navigating the health care system inside and
                  indeed outside Nigeria can be confusing and intimidating. We
                  walk and work with you to quickly and conveniently place you
                  before the appropriate top physicians inside and outside
                  Nigeria.
                </p>
                {/* <div className="absolute top-0 -z-1 w-[300px] border-2 border-red-600">
                  
                </div> */}
              </div>
            </div>

            <div
              ref={sliderRef}
              className="flex w-full max-w-[500px] keen-slider md:-translate-y-[60px] md:-translate-x-[60px]"
            >
              <div className="absolute z-50 flex gap-5 p-5 bottom-3 right-5">
                {sliderLoaded && sliderInstanceRef && (
                  <button
                    disabled={currentSlide === 0}
                    onClick={(e: any) => {
                      e.stopPropagation() || sliderInstanceRef.current.prev();
                    }}
                    className="bg-[#5A0F39] rotate-180 rounded-full p-4 w-12 h-12 items-center justify-center flex  text-white border-2 border-[#CE9328]"
                  >
                    <div>
                      <ArrowRight />
                    </div>
                  </button>
                )}

                {sliderLoaded && sliderInstanceRef && (
                  <button
                    disabled={
                      currentSlide ===
                      sliderInstanceRef.current.track.details.slides.length - 1
                    }
                    onClick={(e: any) => {
                      e.stopPropagation() || sliderInstanceRef.current.next();
                    }}
                    className="bg-[#5A0F39]  rounded-full p-4 w-12 h-12 items-center justify-center flex  text-white border-2 border-[#CE9328]"
                  >
                    <div>
                      <ArrowRight />
                    </div>
                  </button>
                )}
              </div>

              <div className="h-[380px] keen-slider__slide shrink-0 w-[500px]">
                <StaticImage
                  className="w-full h-full"
                  alt=""
                  src="../assets/lady.png"
                />
              </div>

              <div className="h-[380px] keen-slider__slide shrink-0 w-[500px]">
                <StaticImage
                  className="w-full h-full"
                  alt=""
                  src="../assets/lady.png"
                />
              </div>

              <div className="h-[380px] keen-slider__slide shrink-0 w-[500px]">
                <StaticImage
                  className="w-full h-full"
                  alt=""
                  src="../assets/lady.png"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;

const HeroSlider = () => {};
