// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-source-custom-api`,
//       options: {
//         url: 'https://santis-backend.herokuapp.com/api/team-members',
//         imageKeys: ['images'],
//         rootKey: 'teamMember',
//         schemas: {
//           teamMember: `
//           id: id
//           name: name
//           title: title
//           suffix: suffix
//           is_management: is_management
//           is_medical: is_medical
//           about: about
//           created_at: created_at
//           updated_at: created_at
//           `,
//           id: `id: Int`,
//           name: `name: String`,
//           title: `title: String`,
//           suffix: `suffix: String`,
//           is_management: `is_management: Int`,
//           is_medical: `is_medical: Int`,
//           about: `about: String`,
//           created_at: `created_at: String`,
//           updated_at: `updated_at: String`,
//         },
//       },
//     },
//   ],
// };

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/assets/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./packages`,
      },
    },
  ],
};
