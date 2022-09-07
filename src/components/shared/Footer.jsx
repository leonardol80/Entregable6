import React from 'react'
import '../shared/styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">© By Celsius - Leonardo 2022</div>
      <div className="social-networks">
           <a href="#">
           <i className="fa-brands fa-instagram"></i>
           </a>
           <a href="#">
           <i className="fa-brands fa-linkedin"></i>
           </a> 
           <a href="#">
              <i className="fa-brands fa-youtube"></i>
           </a>
      </div>
    </footer>
  )
}

export default Footer