import './Projects.css'

export default function Projects() {
  const projects = document.createElement('section')
  projects.innerHTML = `
    <h2>Proyectos</h2>
    <div class="project-list">
      <div class="project">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1.</p>
      </div>
      <div class="project">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2.</p>
      </div>
    </div>
  `
  return projects
}
