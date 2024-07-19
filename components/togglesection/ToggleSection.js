import '@components/togglesection/ToggleSection.css'

export default function ToggleSection() {
  const section = document.createElement('section')
  section.setAttribute('id', 'toggle-section')
  section.innerHTML = `
    <div class="toggle-buttons">
      <button id="experience-btn">Experiencia</button>
      <button id="education-btn">Estudios</button>
    </div>
    <div id="content">
      <p>Estudios y Experiencias para conocerme un poco más :)</p>
    </div>
  `

  const experienceBtn = section.querySelector('#experience-btn')
  const educationBtn = section.querySelector('#education-btn')
  const content = section.querySelector('#content')

  experienceBtn.addEventListener('click', () => {
    content.innerHTML = `
      <h3>Experiencia</h3>
      <ul>
        <li>Mantenimiento web Evfilms (Valladolid)(2023 - 2024)</li>
        <li>Desarrollador jr, Amboss (Berlín) (2021 - 2022)</li>
      </ul>
    `
  })

  educationBtn.addEventListener('click', () => {
    content.innerHTML = `
      <h3>Estudios</h3>
      <ul>
        <li>Desarrollo Web - The Power (2024 - Presente)</li>
        <li>Desarrollo Web - AIP Barcelona (2021 - 2022)</li>
      </ul>
    `
  })

  return section
}
