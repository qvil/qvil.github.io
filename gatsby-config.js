require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Qvil Blog`,
    // Default title of the page
    siteTitleAlt: `Qvil Blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Qvil Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://blog.qvil.dev`,
    // Used for SEO
    siteDescription: `Qvil Blog`,
    // Will be set on the <html /> tag
    siteLanguage: `ko`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@qvil`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Github`,
        url: `https://github.com/qvil`,
      },
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/qvil`,
          },
          // {
          //   name: `Instagram`,
          //   url: `https://www.instagram.com/lekoarts.de/`,
          // },
        ],
        formatString: "YYYY.MM.DD",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `qvil-blog`,
        short_name: `qvil-blog`,
        description: `Qvil Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: process.env.GOOGLE_ADSENSE_ID,
      },
    },
    {
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: process.env.GOOGLE_ADSENSE_ID,
        head: true, // Optional
      },
    },
  ].filter(Boolean),
};
