import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Twitter from './twitter'
import Facebook from './facebook'

export default class SEO extends Component {
  render() {
    const { title, desc, banner, pathname, article } = this.props
    return (
      <StaticQuery
        query={query}
        render={({
          site: {
            siteMetadata: {
              defaultTitle,
              shortName,
              siteLanguage,
              siteUrl,
              defaultDescription,
              twitter,
            },
          },
          file: {
            childImageSharp: {
              original: { defaultBanner },
            },
          },
        }) => {
          const seo = {
            title: title || defaultTitle,
            description: desc || defaultDescription,
            image: banner || `${siteUrl}${defaultBanner}`,
            url: `${siteUrl}${pathname || '/'}`,
          }

          return (
            <>
              <Helmet title={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
                <html lang={siteLanguage} />
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
                <meta name="apple-mobile-web-app-title" content={shortName} />
                <meta name="application-name" content={shortName} />
              </Helmet>
              <Facebook
                desc={seo.description}
                image={seo.image}
                title={seo.title}
                type={article ? 'article' : null}
                url={seo.url}
              />
              <Twitter
                title={seo.title}
                image={seo.image}
                desc={seo.description}
                username={twitter}
              />
            </>
          )
        }}
      />
    )
  }
}

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        shortName
        siteLanguage
        siteUrl: url
        defaultDescription: description
        twitter
      }
    }
    file(relativePath: { eq: "convoluted-icon.png" }) {
      childImageSharp {
        original {
          defaultBanner: src
        }
      }
    }
  }
`
