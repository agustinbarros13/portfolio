import './Footer.css'

function Footer() {
  const footer = document.createElement('footer')
  footer.innerHTML = `
    <p>&copy; 2024 Agustín Barros. Todos los derechos reservados.</p>
  `
  return footer
}

export default Footer
