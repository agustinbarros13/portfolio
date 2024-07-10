import './About.css'

export default function About() {
  const aboutSection = document.createElement('section')
  aboutSection.setAttribute('id', 'about')
  aboutSection.innerHTML = `
    <div class="about-container">
      <div class="about-image">
        <img src="ruta-a-tu-imagen.jpg" alt="Foto de Perfil">
      </div>
      <div class="about-details">
        <h2>Acerca de Mí</h2>
        <p>Teléfono: +34 603644632</p>
        <p>Nacionalidad: Argentina, Carhué, BS, AS</p>
        <p>Residencia: España</p>
        <h3>Lenguajes y Herramientas</h3>
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
