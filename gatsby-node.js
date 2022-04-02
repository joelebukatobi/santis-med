const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

const fetch = require('node-fetch');
const crypto = require('crypto');
const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({ actions, createNodeId }) => {
  // console.log('Hello World');
  const { createNode } = actions;

  // Team Members API
  const teamMembers = await fetch(
    `${process.env.GATSBY_SANTIS_API_URL}/api/team-members`,
  );
  const res = await teamMembers.json();

  // console.log(res.data);
  res.data.map((team, i) => {
    const userNode = {
      id: createNodeId(`PAGE-${team.id}`),
      parent: `__SOURCE__`,
      internal: {
        type: `Team`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      // Other fields that you want to query with graphQl
      name: team.name,
      suffix: team.suffix,
      image: team.image,
      about: team.about,
      title: team.title,
      is_management: team.is_management,
      is_medical: team.is_medical,
    };
    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to userNode
    userNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(userNode);
  });

  // About Us API
  const aboutUs = await fetch(
    `${process.env.GATSBY_SANTIS_API_URL}/api/post/about-us`,
  );

  const resAboutUs = await aboutUs.json();
  const resAbout = [resAboutUs.data];
  // console.log(resAbout);

  resAbout.map((about, i) => {
    const userNode = {
      // id: `${i}`,
      id: createNodeId(`PAGE-${about.id}`),
      parent: `__SOURCE__`,
      internal: {
        type: `About`,
        // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      // Other fields that you want to query with graphQl
      author_id: about.author_id,
      category_id: about.category_id,
      title: about.title,
      excerpt: about.excerpt,
      body: about.body,
      slug: about.slug,
      image: about.image,
    };
    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to userNode
    userNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(userNode);
    // console.log(userNode);
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const template = path.resolve('src/pages/team/team.tsx');
    resolve(
      // query Gatbsy's GraphQL store for all vehiclePage nodes
      graphql(`
        {
          allTeam(limit: 500) {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allTeam.edges.forEach(({ node }) => {
          createPage({
            path: `team/${node.id}`,
            component: template,
            context: {
              id: `${node.id}`,
            },
          });
        });
      }),
    );
  });
};
