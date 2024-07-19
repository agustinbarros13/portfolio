import Header from '@components/header/Header.js'
import About from '@components/about/About.js'
import Projects from '@components/projects/Projects.js'
import ToggleSection from '@components/togglesection/ToggleSection.js'
import Footer from '@components/footer/Footer.js'

document.addEventListener('DOMContentLoaded', function () {
  const header = Header()
  const about = About()
  const projects = Projects()
  const toggleSection = ToggleSection()
  const footer = Footer()

  document.body.appendChild(header)
  document.body.appendChild(about)
  document.body.appendChild(projects)
  document.body.appendChild(toggleSection)
  document.body.appendChild(footer)
})
