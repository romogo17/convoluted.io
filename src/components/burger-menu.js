import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import SocialIcons from './social-icons'
import links from '../data/menu-links.json'
import './burger-menu.scss'

// const emojiStyle = {
//   width: 20,
//   height: 20
// }

export default class BurgerMenu extends Component {
  toggle() {
    this.setState({
      open: !(this.state && this.state.open),
    })
  }

  render() {
    const classes = ['burger-menu']
    if (this.state && this.state.open) classes.push('open')

    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "convoluted-icon.png" }) {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        `}
        render={data => (
          <div className={classes.join(' ')}>
            <div className="hamburger" onClick={() => this.toggle()} />
            <div className="header">
              <h1>
                <img
                  src={data.file.childImageSharp.original.src}
                  alt="Profile"
                />
                <a href="/">convoluted.io</a>
              </h1>
            </div>

            <div className="burger-content">
              <h2>Menu</h2>
              {
                links.map((l, i) => {
                  const renderLink = /^\w+:/.test(l.to)
                      ? this.renderGlobalLink
                      : l.global
                        ? this.renderGlobalLink
                        : this.renderLocalLink
                  return renderLink(l, i)
                })
              }
              <h2 className="social-media">links</h2>
              <SocialIcons />
            </div>
          </div>
        )}
      />
    )
  }

  renderLocalLink(l, i) {
    if (l.className === 'footer-link') return

    return (
      <Link className="button" to={l.to} key={i}>
        {l.title}
      </Link>
    )
  }

  renderGlobalLink(l, i) {
    if (l.className === 'footer-link') return

    return (
      <a className="button" href={l.to} key={i}>
        {l.title}
      </a>
    )
  }
}
