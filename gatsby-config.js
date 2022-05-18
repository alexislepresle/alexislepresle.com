module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.alexislepresle.com',
    title: 'alexislepresle',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `outfit`,
          `wght@400;500;600;700;800;900` // you can also specify font weights and styles
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-61270414-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
        name: `Alexis Lepresle`,
        short_name: `Alexis Lepresle`,
        description: `J'accompagne des boutiques e-commerce Shopify dans leur croissance. Je suis spécialisé dans le développement d'applications, de thème, ...`,
        lang: `fr`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#755AF3`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    }
  ],
}
