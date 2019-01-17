import React, { Component } from 'react'
import { graphql } from 'gatsby'
import SimpleLayout from '../components/simple-layout'
import ShareButtons from '../components/share-buttons'
import './blog-post.scss'
import 'prismjs/themes/prism-solarizedlight.css'
import 'katex/dist/katex.min.css'
// import Newsletter from "../components/newsletter"
// import "prismjs/themes/prism-dark.css"

export default class BlogPostTemplate extends Component {
  render() {
    if (!this.props.data.markdownRemark)
      this.props.data.markdownRemark = this.props.data.aliasMarkdownRemark
    const post =
      this.props.data.markdownRemark || this.props.data.aliasMarkdownRemark

    return (
      <SimpleLayout
        name="blog-post"
        location={this.props.location}
        title={post.frontmatter.title}
        desc={post.frontmatter.description}
        banner={post.frontmatter.image}
        pathname={post.frontmatter.url}
        article
      >
        {this.renderTitle(post)}
        {this.renderImage(post)}
        <div className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
        <ShareButtons
          title={post.frontmatter.title}
          path={post.frontmatter.path}
        />
        {/* <div className="inline-newsletter">
          <div className="zigzag" />
          <Newsletter title="Did you like this article? Subscribe for new posts:" />
        </div> */}
      </SimpleLayout>
    )
  }

  renderTitle({ frontmatter: post }) {
    if (post.presentation) {
      return this.renderPresentationTitle(post)
    }

    return [
      <h1 key="0">{post.title}</h1>,
      <h2 key="1">
        {post.description ? <span>{post.description}</span> : null}{' '}
        <span className="date">{post.date}</span>{' '}
      </h2>,
    ]
  }

  renderPresentationTitle(post) {
    return (
      <div className="presentation-title">
        <section>
          <h1>{post.title}</h1>
          <h2>
            <span className="date">Last Update: {post.date}</span>{' '}
          </h2>
        </section>
      </div>
    )
  }

  renderImage({ frontmatter: post }) {
    if (post.presentation) return null
    if (!post.image || post.hideImage || !post.image.trim())
      return <div className="post-image-space" />

    const css = {
      backgroundImage: `url(${post.image})`,
    }

    if (post.imageHeight) {
      css.height = post.imageHeight
    }

    if (post.imageWidth) {
      css.width = post.imageWidth
    }

    if (post.imageMaxWidth) {
      css.maxWidth = post.imageMaxWidth
    }

    if (post.imageSize) {
      css.backgroundSize = post.imageSize
    }

    return (
      <div
        className={'post-image ' + (post.imageCaption ? 'has-caption' : '')}
        style={css}
      >
        {post.imageCaption ? (
          <div className="post-image-caption">{post.imageCaption}</div>
        ) : null}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        description
        image
        imageHeight
        imageWidth
        imageCaption
        hideImage
        presentation
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
    aliasMarkdownRemark: markdownRemark(
      frontmatter: { aliasPath: { eq: $path } }
    ) {
      id
      html
      frontmatter {
        title
        description
        image
        imageHeight
        imageWidth
        imageCaption
        hideImage
        presentation
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
