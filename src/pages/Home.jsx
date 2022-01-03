// import { Link } from 'react-router-dom';
import '../assets/styles/home.css';
import logo from '../assets/img/logo.jpeg'
import Main from './Main';

function Home() {
    return (
        <>
            {/* Logo section - first parallax */}
            <div className="parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-start ">
                            <p className='beta'>beta</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 my-3 d-flex justify-content-center align-items-center">
                            <div className="caption m-1 white flex_column">
                                <img className="m-1" src={logo} alt={"logo"} />
                                <span className="m-2" >cocktail DB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Logo section  */}
            <div >
                <div className="container">
                    <Main />
                </div>
            </div>
        </>
    )
}

export default Home

