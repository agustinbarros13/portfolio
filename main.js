import Header from './components/Header.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import ToggleSection from './components/ToggleSection.js'

document.getElementById('header').appendChild(Header())
document.getElementById('about').appendChild(About())
document.getElementById('projects').appendChild(Projects())
document.getElementById('toggle-section').appendChild(ToggleSection())
