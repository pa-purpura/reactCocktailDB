import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/Search';
import useSearch from '../hooks/useSearch';
import '../assets/styles/colors.css';


function Categories() {

    const thisSearch = useSearch()

    useEffect(() => {
        thisSearch.getCategories()
    }, []);

    const context = useContext(SearchContext)
    const categories = context.categories

    const [choise, setChoise] = useState('')

    const handleChange = (event) => {
        setChoise(event.target.value)
    };

    const clear = (event) => {
        event.target.value = "";
    };

    const getUserChoise = (category) => {
        thisSearch.filterByCategories(category)
    }

    return (
        <div className="row " >
            <div className="col-md-12  d-flex justify-content-center align-items-center " style={{ height: '20vh' }}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Select category"
                        onChange={handleChange}
                        onFocus={clear}
                        onKeyPress={(e) => e.key === 'Enter' && getUserChoise(choise)}
                    />
                    <datalist id="datalistOptions" >
                        {categories.map(item => <option value={item.strCategory} />)}
                    </datalist>
                    <button className="btn bg_orange white" onClick={(e) => getUserChoise(choise)} type="button">Search</button>
                </div>
            </div>
        </div >
    )
}

export default Categories



