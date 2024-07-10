import './Header.css'

export default function Header() {
  const header = document.createElement('header')
  header.innerHTML = `
    <nav>
      <h1>Agustín Barros</h1>
      <ul>
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
      </ul>
    </nav>
  `
  return header
}
