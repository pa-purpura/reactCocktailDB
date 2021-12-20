import { Link } from 'react-router-dom';
import '../assets/styles/colors.css';


function Main() {
    return (
        <div className="row mt-5 ">
            <div className="col-sm-6 d-flex justify-content-center">
                <div className="card text-center m-1" style={{ width: '22rem' }}>
                    <div className="card-body bg_white">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/search_by_name"><button className="btn bg_yellow white ">search_by_name</button></Link>
                        {/* <a href="#" className="btn btn-primary">go to reaserach</a> */}
                    </div>
                </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-center">
                <div className="card text-center m-1" style={{ width: '22rem' }}>
                    <div className="card-body bg_white">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/search_by_letter"><button className="btn bg_yellow white">search_by_letter</button></Link>
                        {/* <a href="#" className="btn btn-primary">go to research</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main