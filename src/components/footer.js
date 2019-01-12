import React, { Component } from 'react'
import Menu from './menu'
import SocialIcons from './social-icons'
import Newsletter from "./newsletter"

import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner">
          {this.props.newsletter ? <Newsletter /> : null}
          <div className="footer-left">
            <Menu location={this.props.location} footer />
          </div>
          <div className="footer-right">
            <div className="quote">
              © {new Date().getFullYear()} Roberto Mora.
            </div>
            <SocialIcons />
          </div>
          <div className="clear"></div>
        </div>

      </div>
    )
  }
}
