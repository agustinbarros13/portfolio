import '@components/projects/Projects.css'
import project1Image from '@images/proyecto1.jpg'
import project2Image from '@images/proyecto2.jpg'

const projectsData = [
  {
    title: 'Proyecto 1',
    description: 'Es un proyecto de The power, donde se trabaja con JS y Vite.',
    link: 'https://github.com/agustinbarros13/entrega-vite-js',
    image: project1Image
  },
  {
    title: 'Proyecto 2',
    description:
      'Mantenimiento y desarrollo de una Web sencilla. (CSS, JS y HTML)',
    link: 'https://www.evfilms.es/productora_de_video_en_valladolid',
    image: project2Image
  }
]

//Intento hacer una funcion para hacer un elemento reutilizable
function createProjectElement({ title, description, link, image }) {
  const projectDiv = document.createElement('div')
  projectDiv.classList.add('project')

  projectDiv.innerHTML = `
    <h3>${title}</h3>
    <div class="project-content">
      <img src="${image}" alt="${title}" class="project-image">
      <p>${description} Link: <a href="${link}" target="_blank">${link}</a></p>
    </div>
  `

  return projectDiv
}

function Projects() {
  const projectsSection = document.createElement('section')
  projectsSection.setAttribute('id', 'projects')

  const projectList = document.createElement('div')
  projectList.classList.add('project-list')

  projectsData.forEach((project) => {
    const projectElement = createProjectElement(project)
    projectList.appendChild(projectElement)
  })

  projectsSection.appendChild(projectList)

  return projectsSection
}

export default Projects
