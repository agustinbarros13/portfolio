import './Projects.css'

export default function Projects() {
  const projects = document.createElement('section')
  projects.innerHTML = `
    <h2>Proyectos</h2>
    <div class="project-list">
      <div class="project">
        <h3>Proyecto 1</h3>
        <p>Es un ejercicio realizado en las clases en las que se trabaja con JS y Vite. 
        Este es el link:https://github.com/agustinbarros13/entrega-vite-js
        </p>
      </div>
      <div class="project">
        <h3>Proyecto 2</h3>
        <p>Mantenimiento de Web sensillo.(CSS, JS y HTML) Link:https://www.evfilms.es/productora_de_video_en_valladolid </p>
      </div>
    </div>
  `
  return projects
}
