import React, { Component } from 'react'
import SimpleLayout from '../components/simple-layout'
import projects from '../data/projects.json'
import "./software.scss"
// import Helmet from 'react-helmet'
// import Newsletter from '../components/newsletter'

export default class Software extends Component {
  render() {

    return (
      <SimpleLayout
        name="software"
        location={this.props.location} // Needed for menus
        title="Software"
        desc="Software projects I've built or collaborated with"
        banner="https://scontent-ort2-2.cdninstagram.com/vp/ec637c997112a0b6351cd2d54f94cdc5/5CC85822/t51.2885-15/e35/14350579_310175709357433_7169720281672450048_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com"
      >
        <h1>Software Projects.</h1>
        <h2>I enjoy high-performance computing, data science and databases.</h2>

        { projects.recent &&
          <div className="recent">
            <h3>
              Recent projects
            </h3>

            {projects.recent.map(p => this.renderProject(p))}
          </div>
        }

        {/* <div className="clients">
          <h3>My most recent client was superhuman:</h3>
          <div className="superhuman">
            <img src="https://cldup.com/Wj7n50mV13.png" />
            <span className="quote">&#x201c;</span>
            <p>
              Azer is a phenomenal problem solver, and a great asset on any engineering team. He worked with us on a very high risk project, and it's now in production for all of our users.
              <strong>Conrad Irwin<br />CTO of Superhuman</strong>
            </p>
            <div className="clear"></div>
          </div>
        </div> */}
        { projects.opensource &&
          <div className="opensource">
            <h3>
              Open Source
            </h3>
            {projects.opensource.map(p => this.renderProject(p))}
            <a href="https://github.com/romogo17" className="github">More on Github &#10230;</a>
          </div>
        }
        { projects.websites &&
          <div className="websites">
            <h3>
            Websites
            </h3>
            {projects.websites.map(p => this.renderProject(p))}
          </div>
        }
        { projects.old &&
        <div className="old">
          <h3>
            Old / dead
          </h3>
          {projects.old.map(p => this.renderProject(p))}
        </div>
        }
        {/* <div className="inline-newsletter">
          <div className="zigzag"></div>
          <Newsletter title="That's about it. You can subscribe my personal newsletter to hear updates on my projects." />
        </div> */}
      </SimpleLayout>
    )
  }
  renderProject(project) {
    return (
      <div className="recent-project">
        {project.logo ? this.renderLogo(project) : null}
        {project.screenshot ? this.renderScreenshot(project) : null}
        <a href={project.link}>{project.title}</a>
        —{project.description}
      </div>
    )
  }
  renderLogo(project) {
    return (
      <div className="logo">
        <img src={project.logo} alt={project.title} />
      </div>
    )
  }
  renderScreenshot(project) {
    const css = {
      'backgroundImage': `url(${project.screenshot})`
    }
    return (
      <div className="screenshot">
        <div className="screenshot-img" style={css}></div>
      </div>
    )
  }
}
