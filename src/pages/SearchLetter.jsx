import Letters from '../components/Letters';
import List from '../components/List';


function SearchLetter() {
    return (
        <div>
            <div className="container-fluid">
                <Letters />
            </div>
            <div className="container">
                <List />
            </div>

        </div>
    )
}

export default SearchLetter