import './About.css'
import myPhoto from '../image/yo.jpg'

function About() {
  const aboutSection = document.createElement('section')
  aboutSection.setAttribute('id', 'about')

  aboutSection.innerHTML = `
    <div class="about-container">
      <div class="about-image">
        <img src="${myPhoto}" alt="Mi Foto">
      </div>
      <div class="about-details">
        <h2>Acerca de Mí</h2>
        <p>Teléfono: +34 603644632</p>
        <p>Nacionalidad: Argentina, Carhué, BS, AS.</p>
        <p>Residencia: España.</p>
        <h3>Lenguajes Trabajados:</h3>
        <ul class="skills">
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Visual Studio Code</li>
          <li>Vite</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  `
  return aboutSection
}

export default About
