import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/colors.css';
import '../assets/styles/buttons.css';
import { FaHome, FaArrowLeft, FaArrowUp } from "react-icons/fa";

function Buttons() {
    const navigate = useNavigate();
    return (

        < div className='row m-4' style={{ minHeight: '7vh' }}>
            <div className="col-md-12 d-flex flex-row justify-content-center">
                <div className="button-container">
                    <Link to="/"><button className="btn buttons-icons"><FaHome /></button></Link>
                </div>
                <div className="button-container" >
                    <button onClick={() => navigate(-1)} className="btn buttons-icons"><FaArrowLeft /></button>
                </div>
                <div className="button-container" >
                    <a href="#" className="btn buttons-icons"><FaArrowUp /></a>
                </div>
            </div>
        </div >
    )
}

export default Buttons
