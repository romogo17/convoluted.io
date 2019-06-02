import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Intro from '../components/intro'
import CenteredLayout from '../components/centered-layout'
import Img from 'gatsby-image'
// import Newsletter from "../components/newsletter"

import './index.scss'

export default class IndexPage extends Component {
  render() {
    return (
      <CenteredLayout
        name="index"
        location={this.props.location} // Needed for menus
        title="Home"
      >
        <div className="columns">
          {this.renderIntro()}
          {this.renderPhoto()}
        </div>
      </CenteredLayout>
    )
  }

  renderIntro() {
    return (
      <div className="left column">
        <h1 className="title">I craft software.</h1>
        <h2>
          My name is <strong>Roberto Mora</strong>.
        </h2>
        <Intro />
        {/* <div className="inline-newsletter">
          <div className="zigzag"></div>
          <Newsletter />
        </div> */}
      </div>
    )
  }

  renderPhoto(src) {
    return <div className="right column">
        <Img
          alt="Roberto's Profile Image"
          className="profile-picture"
          fluid={this.props.data.file.childImageSharp.fluid}
        />
      </div>
  }
}

export const query = graphql`
  query IndexPageQuery {
    file(relativePath: { eq: "profile-picture.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`