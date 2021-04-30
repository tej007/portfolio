// Write your code here
import {Component} from 'react'

import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'
import HomeSection from '../HomeSection'
import NavBar from '../NavBar'
import ProjectsSection from '../ProjectsSection'
import SocialMediaSection from '../SocialMediaSection'

import './index.css'

const sections = {
  home: 'HOME',
  about: 'ABOUT',
  projects: 'PROJECTS',
  contact: 'CONTACT',
}

class Portfolio extends Component {
  state = {selectedSection: 'HOME'}

  renderComponent = () => {
    const {selectedSection} = this.state

    switch (selectedSection) {
      case sections.about:
        return <AboutSection />
      case sections.projects:
        return <ProjectsSection />
      case sections.contact:
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  render() {
    const {selectedSection} = this.state

    return (
      <div className="portfolio-container">
        <NavBar
          selectedSection={selectedSection}
          changeSelectedSection={this.changeSelectedSection}
        />
        <div className="portfolio-body">
          <div className="selected-section">{this.renderComponent()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
