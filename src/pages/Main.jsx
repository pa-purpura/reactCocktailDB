import { Link } from 'react-router-dom';
import '../assets/styles/colors.css';
import { SearchContext } from '../context/Search';
import { useEffect, useContext } from 'react';


import { BiDrink } from "react-icons/bi";


function Main() {

    const context = useContext(SearchContext)

    useEffect(() => {
        context.setCocktails([]);
    }, []);

    return (
        <>
            <div className="row  p-4">
                <div className="col-md-12 d-flex flex-column justify-content-center m-1">
                    <div className="text-center"><BiDrink /></div>
                    <h3 className="text-center"> cocktailDB is an WbApp that exploits the rest API technology.</h3>
                    <p className="text-center"> it gives you access to an vast <a rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }} href="https://www.thecocktaildb.com/">database</a> of cocktails.</p>
                    <p className="text-center"> you can search your cocktail by name  to obtain a wealth of information about. </p>
                </div>
                <div className="col-md-12 d-flex justify-content-center m-1">
                    <div className="card text-center m-1" style={{ width: '22rem' }}>
                        <div className="card-body bg_white">
                            <h5 className="card-title">search by name</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/search_by_name"><button className="btn bg_yellow white ">get a drink!</button></Link>
                            {/* <a href="#" className="btn btn-primary">go to reaserach</a> */}
                        </div>
                    </div>
                </div>

            </div>

            <div className="row  p-4">
                <div className="col-md-12 d-flex flex-column justify-content-center mb-3">
                    <p className="text-center"> ... or get a list filtered by categories. </p>
                </div>

                <div className="col-md-12 d-flex justify-content-center mb-3">
                    <div className="card text-center " style={{ width: '22rem' }}>
                        <div className="card-body bg_white">
                            <h5 className="card-title">filter by categories</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/filter_by_categories"><button className="btn bg_yellow white">get a drink!</button></Link>
                            {/* <a href="#" className="btn btn-primary">go to research</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main

    // < div className="col-md-6 d-flex justify-content-center mb-3" >
    //     <div className="card text-center m-1" style={{ width: '22rem' }}>
    //         <div className="card-body bg_white">
    //             <h5 className="card-title">Special title treatment</h5>
    //             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //             <Link to="/search_by_name"><button className="btn bg_yellow white ">search_by_name</button></Link>
    //             {/* <a href="#" className="btn btn-primary">go to reaserach</a> */}
    //         </div>
    //     </div>
    // </div >