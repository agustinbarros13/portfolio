import './About.css'

export default function About() {
  const about = document.createElement('section')
  about.innerHTML = `
    <h2>Sobre Mí</h2>
    <p>Soy un desarrollador web con pasión por crear soluciones efectivas y atractivas.</p>
  `
  return about
}
