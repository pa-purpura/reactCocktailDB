import { useContext } from 'react';
import { SearchContext } from '../context/Search';
import useSearch from '../hooks/useSearch';
import '../assets/styles/colors.css';

function Input() {


    const drink = useContext(SearchContext)
    const thisSearch = useSearch()

    const choise = drink.setName
    const drinkName = drink.name


    const getUserChoise = (name) => {
        thisSearch.searchByName(name)
        // choise(name)

    }

    return (
        <div className="row " >
            <div className="col-md-12  d-flex justify-content-center align-items-center " style={{ height: '20vh' }}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        // onChange={e => choise(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && getUserChoise(e.target.value)}
                        value={drinkName}
                    />
                    <button className="btn bg_orange white" onClick={(e) => getUserChoise(e.target.value)} type="button">Search</button>
                </div>
            </div>
        </div >
    )
}

export default Input

