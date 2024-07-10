import './ToggleSection.css'

export default function ToggleSection() {
  const section = document.createElement('section')
  section.innerHTML = `
    <div class="toggle-buttons">
      <button id="experience-btn">Experiencia</button>
      <button id="education-btn">Estudios</button>
    </div>
    <div id="content">
      <p>Contenido de la sección de experiencia.</p>
    </div>
  `

  const experienceBtn = section.querySelector('#experience-btn')
  const educationBtn = section.querySelector('#education-btn')
  const content = section.querySelector('#content')

  experienceBtn.addEventListener('click', () => {
    content.innerHTML = '<p>Contenido de la sección de experiencia.</p>'
  })

  educationBtn.addEventListener('click', () => {
    content.innerHTML = '<p>Contenido de la sección de estudios.</p>'
  })

  return section
}
