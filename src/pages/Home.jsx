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
            <div>
                <div className="container">
                    <Main />
                    {/* <ul>
                        <li>
                            <Link to="/search_by_name"><button className="btn btn-outline-secondary btn-sm m-1">search_by_name</button></Link>
                        </li>
                        <li>
                            <Link to="/search_by_letter"><button className="btn btn-outline-secondary btn-sm m-1">search_by_letter</button></Link>
                        </li>
                    </ul>  */}
                </div>
            </div>
        </>
    )
}

export default Home