// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const SEO = ({ title, description, pathname, lang }) => (
  <StaticQuery
    query={SEOquery}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || "/"}`,
      }
      return (
        <>
          <Helmet
            title={seo.title}
            titleTemplate={titleTemplate}
            htmlAttributes={{
              lang,
            }}
          >
            <meta name="description" content={seo.description} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)

// ---------------------------------------------------------------------------------- //

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  article: false,
}

// ---------------------------------------------------------------------------------- //
// ? This is a query to be used with the sites meta data for SEO
const SEOquery = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default SEO

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
