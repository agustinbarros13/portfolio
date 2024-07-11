import './Projects.css'

export default function Projects() {
  const projects = document.createElement('section')
  projects.innerHTML = `
    <h2>Proyectos</h2>
    <div class="project-list">
      <div class="project">
        <h3>Proyecto 1</h3>
        <p> Es un proyecto de The power, donde se trabaja con JS y Vite. 
         Este es el link:  <a href="https://github.com/agustinbarros13/entrega-vite-js" target="_blank">https://github.com/agustinbarros13/entrega-vite-js</a>
        </p>
      </div>
      <div class="project">
        <h3>Proyecto 2</h3>
        <p>Mantenimiento y desarrollo de una Web sencilla.(CSS, JS y HTML) Link:<a href="https://www.evfilms.es/productora_de_video_en_valladolid" target="_blank">https://www.evfilms.es/productora_de_video_en_valladolid</a> </p>
      </div>
    </div>
  `
  return projects
}
