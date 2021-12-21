import { useContext } from 'react';
import { SearchContext } from '../context/Search';
import useSearch from '../hooks/useSearch';
import '../assets/styles/colors.css';


function Letters() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const alphabet = useContext(SearchContext)

    const choise = alphabet.setLetter

    const thisSearch = useSearch()

    const getLetter = (letter) => {
        thisSearch.searchByLetter(letter)
        choise(letter)

    }


    return (
        <div className="row " >
            <div className="col-md-12  d-flex justify-content-center align-items-center bg_white" style={{ height: '14rem' }}>
                <ul className="d-flex justify-content-center align-items-center" >
                    {letters.map((letter, i) => (
                        // <a  >
                        <li className="orange"
                            key={i}
                            style={{ marginRight: 30, fontSize: 20 }}
                            onClick={e => getLetter(e.target.textContent)}
                            value={letter}
                        >
                            {letter}
                        </li>
                        // </a>
                    ))}
                </ul>
            </div >
        </div >
    )
}

export default Letters

// {e => choise(e.target.textContent)}