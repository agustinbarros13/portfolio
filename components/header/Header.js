import '@components/header/Header.css'

function Header() {
  const header = document.createElement('header')
  const nav = document.createElement('nav')
  const h1 = document.createElement('h1')
  h1.textContent = 'Agustín Barros'

  const ul = document.createElement('ul')
  const aboutLi = document.createElement('li')
  const aboutLink = document.createElement('a')
  aboutLink.href = '#about'
  aboutLink.textContent = 'Sobre Mí'

  const projectsLi = document.createElement('li')
  const projectsLink = document.createElement('a')
  projectsLink.href = '#projects'
  projectsLink.textContent = 'Proyectos'

  aboutLi.appendChild(aboutLink)
  projectsLi.appendChild(projectsLink)
  ul.appendChild(aboutLi)
  ul.appendChild(projectsLi)
  nav.appendChild(h1)
  nav.appendChild(ul)
  header.appendChild(nav)

  return header
}

export default Header
