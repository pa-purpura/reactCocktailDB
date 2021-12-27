import '../assets/styles/colors.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <nav className="bg-dark text-white text-center  " style={{ height: '12vh' }}>

            <div className="col-md-12 d-flex justify-content-center bg_yellow">
                <a href="https://www.linkedin.com/in/paolo-purpura-90629249/" target="_blank" className="react-icons">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/pa-purpura" target="_blank" className="react-icons">
                    <FaGithubSquare />
                </a>
                <a href="https://www.instagram.com/paolo.purpura/" target="_blank" className="react-icons">
                    <FaInstagramSquare />
                </a>
            </div>
            <div className="text-center p-3" >
                © {new Date().getFullYear()} Copyright - Paolo PURPURA
            </div>
        </nav>
    )
}

export default Footer