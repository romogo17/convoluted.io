import React, { Component } from 'react'
import CenteredLayout from '../components/centered-layout'
// import { graphql } from 'gatsby'
// import Newsletter from "../components/newsletter"

import './index.scss'

export default class NotFoundPage extends Component {
  render() {
    return (
      <CenteredLayout
        name="index"
        location={this.props.location} // Needed for menus
        title="404: Not found"
      >
        <div className="columns">
          {this.renderIntro()}
          {/* {this.renderPhoto(this.props.data.file.childImageSharp.original.src)} */}
        </div>
      </CenteredLayout>
    )
  }

  renderIntro() {
    return (
      <div className="left column">
        <h1 className="title">404</h1>
        <h2>
          Oops... <strong>Page not found</strong>. The page you are looking for
          has been removed or relocated.
        </h2>
      </div>
    )
  }

  // renderPhoto(src) {
  //   return (
  //     <div className="right column">
  //       <img
  //         alt="Profile"
  //         className="profile-picture"
  //         src={
  //           src ||
  //           'https://farm5.staticflickr.com/4879/31742762527_9b17a4e93d_b.jpg'
  //         }
  //       />
  //     </div>
  //   )
  // }
}

// export const query = graphql`
//   query NotFoundPageQuery {
//     file(relativePath: { eq: "profile-picture.png" }) {
//       childImageSharp {
//         original {
//           src
//         }
//       }
//     }
//   }
// `
