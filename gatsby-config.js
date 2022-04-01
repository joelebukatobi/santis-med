require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
