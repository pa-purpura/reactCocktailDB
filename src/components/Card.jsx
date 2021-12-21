// import { useContext } from 'react';
// import { SearchContext } from '../context/Search';
import '../assets/styles/colors.css';

function Card({ data, id }) {


    return (


        <div className="card text-center m-1" style={{ width: '14rem' }} >
            <>
                <img className="card-img-top" src={data.strDrinkThumb} height={180} />
                <div className="card-body bg_white">
                    <h5 className="card-title">{data.strDrink}</h5>
                    <p className="card-text">{data.strCategory}</p>
                    <a href="#" className="btn bg_yellow white">Details</a>
                </div>
            </>
        </div>

    )
}

export default Card

// style="width: 18rem;" alt="..." src={this.props.imageUri} id, name, img height={150}width={80}