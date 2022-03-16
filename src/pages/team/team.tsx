import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import FinalCall from '@/components/final-call';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
export default function TeamMember(props) {
  console.log(props);
  return (
    <Layout>
      <div className="bg-white">
        <div className="h-28 bg-santis-purple"></div>
        <div className="h-20 bg-[#0A1829] flex w-full justify-center items-center text-white">
          <h1>The Team</h1>
        </div>
        <div className="container grid gap-12 px-6 py-16 mx-auto md:grid-cols-12">
          <div className="md:col-span-5 aspect-[2/3] overflow-hidden">
            <img src={props.data.team.image} alt="" />
          </div>
          <div className="md:col-span-7">
            <h1 className="text-2xl font-bold text-santis-purple">
              {props.data.team.name}
            </h1>
            <span className="text-sm font-thin">{props.data.team.title}</span>
            <p>{props.data.team.suffix}</p>
            <div className="my-6 space-y-6">
              <p>{props.data.team.about}</p>
            </div>
          </div>
        </div>
      </div>
      <FinalCall />
    </Layout>
  );
}

export const query = graphql`
  query TeamMemberQuery($id: String!) {
    team(id: { eq: $id }) {
      id
      name
      title
      about
      image
      suffix
    }
  }
`;
