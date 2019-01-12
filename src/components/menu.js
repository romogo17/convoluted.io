import React, { Component } from 'react'
import Link from 'gatsby-link'
import {StaticQuery, graphql} from "gatsby"
import links from './menu-links.json'
import "./menu.css"

const emojiStyle = {
  width: 20,
  height: 20
}

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="links">
          {this.props.footer ? this.renderLogo('Home') : null}
          {links.map((l, i) => this.renderLink(l, i))}
        </div>
      </div>
    )
  }

  renderLink(l, i) {
    const location = this.props.location && this.props.location.pathname

    if (l.className === 'footer-link' && !this.props.footer) return

    const className = location === l.to ? `${l.className || ""} selected` : l.className
    const render = /^\w+:/.test(l.to) ? this.renderGlobalLink : this.renderLocalLink

    return ([
      render(l.to, l.title, l.emoji, className),
      i == 1 && !this.props.footer && location !== '/' ? this.renderLogo() : null
    ])
  }

  renderLocalLink(to, title, emoji, className) {
    return (
      <Link className={className} to={to} key={to}>
        <span className="emoji">
          {emoji}
        </span>
        {title}
      </Link>
    )
  }

  renderGlobalLink(to, title, emoji, className) {
    return (
      <a className={className} href={to} key={to}>
        <span className="emoji">
          {emoji}
        </span>
        {title}
      </a>
    )
  }

  renderLogo(caption) {
    return (
      <StaticQuery
        query={
          graphql`
            query {
              file(relativePath: { eq: "convoluted-icon.png" }) {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
          `
        }
        render={data => (
            <a className="logo" href="/">
              <img src={data.file.childImageSharp.original.src} />
              {caption || "convoluted.io"}
            </a>
          )}
      />
    )
  }
}
