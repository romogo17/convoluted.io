import React, { Component } from 'react'
import Intro from '../components/intro'
import CenteredLayout from '../components/centered-layout'
// import Newsletter from "../components/newsletter"

import "./index.scss"

export default class IndexPage extends Component {
  render() {
    return (
      <CenteredLayout name="index"
                      location={this.props.location} // Needed for menus
                      title="Home">
        <div className="columns">
          {this.renderIntro()}
          {this.renderPhoto(this.props.data.file.childImageSharp.original.src)}
        </div>
     </CenteredLayout>
    )
  }

  renderIntro() {
    return (
      <div className="left column">
        <h1 className="title">
          I craft software.
        </h1>
        <h2>
        My name is <strong>Roberto Mora</strong>. I recently founded a startup named <strong>Tensorful</strong>, which is dedicated to creating data driven software solutions.
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
    return (
      <div className="right column">
        <img
          alt="Profile"
          className="profile-picture"
          src={src || 'https://farm5.staticflickr.com/4879/31742762527_9b17a4e93d_b.jpg'}
        />
      </div>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    file(relativePath: { eq: "profile-picture.png" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`