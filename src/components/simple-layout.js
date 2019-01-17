import React, { Component } from 'react'
import Layout from './layout'
import SEO from './seo'
import Menu from './menu'
import Footer from './footer'
import BurgerMenu from './burger-menu'

import './simple-layout.scss'

export default class SimpleLayout extends Component {
  render() {
    const classes = ['simple-layout', this.props.name || '']

    return (
      <Layout>
        <div className={classes.join(' ')}>
          <SEO
            title={this.props.title}
            desc={this.props.desc}
            banner={this.props.banner}
            pathname={this.props.location.pathname}
            article={this.props.article ? true : false}
          />
          <BurgerMenu location={this.props.location} />
          <Menu location={this.props.location} />
          <div className="content">{this.props.children}</div>
          <Footer {...this.props} />
        </div>
      </Layout>
    )
  }
}
