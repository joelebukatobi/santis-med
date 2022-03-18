import Layout from '@/components/layout';
import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import FinalCall from '@/components/final-call';
import classNames from 'classnames';

function Team(props) {
  const [currentRole, setRole] = useState('management');
  return (
    <Layout>
      <div className="">
        <div className="h-28 bg-santis-purple"></div>
        <div className="bg-[#0A1829]">
          <div className="container flex flex-wrap items-center justify-between w-full p-8 mx-auto text-white font-baskerville">
            <div className="flex-shrink-0 w-full max-w-md">
              <h1 className="font-bold">Meet the team</h1>
              <p className="text-sm font-thin">
                Our team is made up of seasoned healthcare, administrative and
                business development professionals with a total of about 100
                years experience in the healthcare industry
              </p>
            </div>
            <div className="inline-grid grid-cols-2 my-4 overflow-hidden uppercase rounded-full">
              <button
                className={classNames('py-3 px-8 inline-block', {
                  'bg-santis-purple': currentRole === 'management',
                  'bg-white text-santis-purple': currentRole !== 'management',
                })}
                onClick={() => setRole('management')}
              >
                Management
              </button>
              <button
                className={classNames('py-3 px-8 inline-block', {
                  'bg-santis-purple': currentRole === 'medical',
                  'bg-white text-santis-purple': currentRole !== 'medical',
                })}
                onClick={() => setRole('medical')}
              >
                Medical
              </button>
            </div>
          </div>
        </div>
        <div className="container px-8 py-16 mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-14 md:grid-cols-4 text-santis-purple">
            {props.data.allTeam.edges.map(({ node }) => (
              <>
                {node.is_management === 1 && currentRole === 'management' && (
                  <div className="grid" key={node.id}>
                    <img src={node.image} alt="" />
                    <div className="">
                      <h3 className="my-4 font-bold">{node.name}</h3>
                      <small>{node.title} &nbsp;</small>
                      <p>{node.suffix || <br />}</p>
                    </div>
                    <Link
                      to={`/team/${node.id}`}
                      className="inline-flex items-center justify-center w-full py-4 mt-2 bg-white border text-santis-purple border-santis-purple"
                    >
                      View Full Profile
                    </Link>
                  </div>
                )}

                {node.is_medical === 1 && currentRole === 'medical' && (
                  <div>
                    <img src={node.image} alt="" />
                    <div className="">
                      <h3 className="my-4 font-bold">{node.name}</h3>
                      <small>{node.title} </small>
                      <p>{node.suffix || <br />} </p>
                    </div>
                    <Link
                      to={`/team/${node.id}`}
                      className="inline-flex items-center justify-center w-full py-4 mt-2 bg-white border text-santis-purple border-santis-purple"
                    >
                      View Full Profile
                    </Link>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        <FinalCall />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query TeamQuery {
    allTeam {
      edges {
        node {
          id
          name
          title
          suffix
          is_management
          is_medical
          about
          image
        }
      }
    }
  }
`;

export default Team;
