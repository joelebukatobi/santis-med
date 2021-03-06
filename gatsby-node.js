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
  const { createNode } = actions;

  // Team Members
  const teamMembers = await fetch(
    `${process.env.GATSBY_SANTIS_API_URL}/api/team-members`,
  );
  const res = await teamMembers.json();
  res.data.map((team, i) => {
    const userNode = {
      id: createNodeId(`PAGE-${team.id}`),
      parent: `__SOURCE__`,
      internal: {
        type: `Team`,
      },
      children: [],
      name: team.name,
      suffix: team.suffix,
      image: team.image,
      about: team.about,
      title: team.title,
      is_management: team.is_management,
      is_medical: team.is_medical,
      sort_by: team.sort_by,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    userNode.internal.contentDigest = contentDigest;
    createNode(userNode);
  });

  // About Us
  const aboutUs = await fetch(
    `${process.env.GATSBY_SANTIS_API_URL}/api/post/about-us`,
  );
  const resAboutUs = await aboutUs.json();
  const resAbout = [resAboutUs.data];
  resAbout.map((about, i) => {
    const userNode = {
      id: `${i}`,
      // id: createNodeId(`PAGE-${about.id}`),
      parent: `__SOURCE__`,
      internal: {
        type: `About`,
      },
      children: [],
      author_id: about.author_id,
      category_id: about.category_id,
      title: about.title,
      excerpt: about.excerpt,
      body: about.body,
      slug: about.slug,
      image: about.image,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    userNode.internal.contentDigest = contentDigest;
    createNode(userNode);
  });

  // Packages
  const packages = await fetch(
    `${process.env.GATSBY_SANTIS_API_URL}/api/plans`,
  );
  const package = await packages.json();
  package.plans.map((plan, i) => {
    const userNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Plan`,
      },
      children: [],
      name: plan.name,
      options: plan.options,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    userNode.internal.contentDigest = contentDigest;
    createNode(userNode);
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const template = path.resolve('src/pages/team/team.tsx');
    resolve(
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
