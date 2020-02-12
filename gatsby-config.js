module.exports = {
  siteMetadata: {
    title: `Emil Laftchiev`,
    description: `Emil Laftchiev is a data analytics research scientist. Emil's research focuses on Machine Learning, Data Mining techniques in anomaly detection, time series analytics, and predictive modeling.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        preview: true,
        baseUrl: 'https://dev-emil-laftchiev-cms.pantheonsite.io/',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-46816374-1",
      },
    },
  ],
}
