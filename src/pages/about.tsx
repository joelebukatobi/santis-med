import Layout from '@/components/layout';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FinalCall from '@/components/final-call';
import { graphql, Link } from 'gatsby';

function About(props) {
  return (
    <Layout>
      <div className="">
        <div className="h-28 bg-santis-purple"></div>
        <div className="h-20 bg-[#0A1829] flex w-full justify-center items-center text-white">
          <h1>{props.data.allAbout.edges[0].node.title}</h1>
        </div>
        <StaticImage
          className="w-full h-[306px] md:h-[408px]"
          src="../assets/about-header.jpg"
          alt=""
        />
        <article className="container p-6 mx-auto my-20">
          <div className="max-w-3xl mx-auto space-y-10">
            <p>
              SANTIS is a luxury membership based medical concierge service. At
              Santis our top priority is ensuring that you get the care you need
              in the most comfortable & seamless way.
            </p>
            <p>
              Your health doesn’t have a schedule.... So, neither do we.{' '}
              <span className="italic font-bold">
                Our team is available 24/7
              </span>{' '}
              to ensure that all your health needs are met{' '}
              <span className="italic font-bold">
                quickly, comfortably, and discreetly.
              </span>
            </p>
            <p>
              <span className="italic font-bold">
                With Santis at your side you can focus on getting better while
                we take care of everything else!
              </span>
            </p>
          </div>
          <div className="grid w-full grid-cols-[3fr,2fr] gap-2 h-48 md:h-96 my-12 md:my-20">
            <StaticImage
              src="../assets/about-image-one.jpg"
              alt=""
              // className="w-full h-[306px] md:h-[408px]"
            />
            <StaticImage
              src="../assets/about-image-two.jpg"
              alt=""
              // className="w-full h-[306px] md:h-[408px]"
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-10">
            <p>
              <span className="italic">
                Our team is made up of seasoned healthcare, administrative and
                business development professionals with a total of about 100
                years experience in the healthcare industry and they are
                supervised by:
              </span>
            </p>
            <p>
              Ngozi Onyia, MBBS FWACP MBA CTH <br />
              Dr Sylvia Cole, MBBS DA FRCA OMP <br />
              Dr Lucia Okogwu, MD DTMH <br />
            </p>

            <p>
              <span className="italic font-bold">
                Our team can get you VIP access into any prestigious healthcare
                facility of your choice globally.
              </span>
            </p>
          </div>
        </article>
        <FinalCall />
      </div>
    </Layout>
  );
}

// export const query = graphql`
//   query AboutQuery {
//     allAbout {
//       edges {
//         node {
//           author_id
//           title
//           body
//           slug
//         }
//       }
//     }
//   }
// `;

export default About;
