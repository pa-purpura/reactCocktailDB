import '../assets/styles/colors.css';
import '../assets/styles/footer.css';
import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <nav className="bg_dark text-white text-center " >

            <div className="col-md-12 d-flex justify-content-center ">
                <a href="https://www.linkedin.com/in/paolo-purpura-90629249/" target="_blank" rel="noreferrer" className="footer-icons">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/pa-purpura" target="_blank" rel="noreferrer" className="footer-icons">
                    <FaGithubSquare />
                </a>
                <a href="https://www.instagram.com/paolo.purpura/" target="_blank" rel="noreferrer" className="footer-icons">
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
// style={{ height: '12vh' }}