import React, { Component } from "react"
import "./newsletter.css"
import "./rainbow.css"

export default class Newsletter extends Component {
  submit() {
    this.formEl.setAttribute(
      "action",
      "//roadbeats.us14.list-manage.com/subscribe/post?u=9fe3d3623b0c1f52fa42d45f3&amp;id=bdb32a67af"
    )
    this.formEl.method = "POST"
    this.formEl.target = "_blank"
    this.formEl.submit()
  }

  render() {
    return (
      <div className="newsletter">
        {this.props.title ? (
          <h1>{this.props.title}</h1>
        ) : (
          <h1>
            Every week, I share inspiration, <br /> knowledge and some updates
            via e-mail.
          </h1>
        )}
        <form
          ref={el => (this.formEl = el)}
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="your@email.com"
              required
            />
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="b_9fe3d3623b0c1f52fa42d45f3_bdb32a67af"
                tabIndex="-1"
                value=""
              />
            </div>
            <div>
              <div className="button" onClick={() => this.submit()}>
                Subscribe
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
