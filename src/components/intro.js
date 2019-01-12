import React, { Component } from 'react'
import "./intro.css"

const blocks = [
  `I'm currently based in Costa Rica. I spend most of my time programming, reading and learning new tech.`,
  `I'm particularly interested in deep learning. I think it is amazing how the data provides enough insight to solve a problem without the need to be an expert in the domain of the problem.`,
  `You can see some of my projects on <a href="https://github.com/romogo17">Github</a>.
   If you think there's a project I could collaborate with, please let me know. I'm always looking forward to giving back to the open source community.`,
  `Interested in working on a project together ? Get in touch with me!`
]

export default class Info extends Component {
  render() {
    return (
      <div className="intro">
        <div className="blocks">
          {blocks.map((b, i) => this.renderBlock(b, i))}
        </div>
      </div>
    )
  }

  renderBlock(html, i) {
    return (
      <div key={i} className="block" dangerouslySetInnerHTML={{__html: html}}></div>
    )
  }
}
