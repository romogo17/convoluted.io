const config = require('./config')

module.exports = {
  siteMetadata: {
    title: config.title,
    shortName: config.shortName,
    siteLanguage: config.siteLanguage,
    url: config.url,
    description: config.description,
    banner: config.banner,
    twitter: config.twitter,
  },
  plugins: [
    /**
     * React Helmet is a component which lets you control your document
     * head using their React component.
     **/
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    /**
     * Plugin for creating File nodes from the file system.
     * The various “transformer” plugins transform File nodes into
     * various other types of data
     **/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`
        ]
      }
    },
    "gatsby-transformer-json",
    // TODO: create the google analytics account
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: config.analytics
    //   }
    // },
    // TODO: add the feed plugin for RSS support
    /**
     * Creates ImageSharp nodes from image types that are supported by the
     * Sharp image processing library
     **/
    `gatsby-transformer-sharp`,
    /**
     * Exposes several image processing functions built on the
     * Sharp image processing library.
     **/
    `gatsby-plugin-sharp`,
    /**
     * Adds support for shipping a manifest.webmanifest with your site.
     **/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roberto Mora`,
        short_name: `Roberto`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/convoluted-icon.png`, // This path is relative to the root of the site.
      },
    },
    /**
     * This (optional) plugin enables Progressive Web App + Offline functionality
     **/
    // 'gatsby-plugin-offline',
  ]
}
