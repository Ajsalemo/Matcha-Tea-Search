require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Josefin Sans`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'YelpAPIQuery',
        fieldName: 'business',
        url: "https://api.yelp.com/v3/graphql",
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          "Content-Type": "application/graphql",
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-theme-material-ui`
  ]
}
