import Layout from '@/components/layout';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FinalCall from '@/components/final-call';
import { graphql, Link } from 'gatsby';

function About() {
  return (
    <Layout>
      <div className="">
        <div className="h-28 bg-santis-purple"></div>
        <div className="h-20 bg-[#0A1829] flex w-full justify-center items-center text-white">
          <h1>About Santis</h1>
        </div>
        <StaticImage
          className="w-full h-[306px] md:h-[408px]"
          src="../assets/smiling-woman.jpg"
          alt=""
        />
        <article className="container p-6 mx-auto my-20">
          <div className="max-w-3xl mx-auto space-y-10">
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate
              about something, including everyone - the coolest people on Earth
              are passionate and therefore nerdy about something whatever it is,
              whether it's sports, or gaming, or technology or fashion, or
              beauty, or food, or whatever.{' '}
            </p>
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate.
            </p>
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate
              about something, including everyone - the coolest people on Earth
              are passionate and therefore nerdy about something whatever it is,
              whether it's sports, or gaming, or technology or fashion, or
              beauty, or food, or whatever.{' '}
            </p>
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate.
            </p>
          </div>
          <div className="grid w-full grid-cols-[3fr,2fr] gap-2 h-48 md:h-96 my-12 md:my-20">
            <StaticImage
              src="../assets/lady.png"
              alt=""
              // className="w-full h-[306px] md:h-[408px]"
            />
            <StaticImage
              src="../assets/discuss.png"
              alt=""
              // className="w-full h-[306px] md:h-[408px]"
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-10">
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate
              about something, including everyone - the coolest people on Earth
              are passionate and therefore nerdy about something whatever it is,
              whether it's sports, or gaming, or technology or fashion, or
              beauty, or food, or whatever.{' '}
            </p>
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate.
            </p>
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate
              about something, including everyone - the coolest people on Earth
              are passionate and therefore nerdy about something whatever it is,
              whether it's sports, or gaming, or technology or fashion, or
              beauty, or food, or whatever.{' '}
            </p>
            <p>
              People think modeling's mindless, that you just stand there and
              pose, but it doesn't have to be that way. I like to have a lot of
              input. I know how to wear a dress, whether it should be shot with
              me standing or sitting. Being nerdy just means being passionate.
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
//           category_id
//           title
//           excerpt
//           body
//           slug
//           image
//         }
//       }
//     }
//   }
// `;

export default About;
