import './Projects.css'
import project1Image from '../image/proyecto1.jpg'
import project2Image from '../image/proyecto2.jpg'

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

function Projects() {
  const projectsSection = document.createElement('section')
  projectsSection.setAttribute('id', 'projects')

  const projectList = document.createElement('div')
  projectList.classList.add('project-list')

  projectsData.forEach((project) => {
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')

    projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <div class="project-content">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <p>${project.description} Link: <a href="${project.link}" target="_blank">${project.link}</a></p>
      </div>
    `

    projectList.appendChild(projectDiv)
  })

  projectsSection.appendChild(projectList)

  return projectsSection
}

export default Projects
