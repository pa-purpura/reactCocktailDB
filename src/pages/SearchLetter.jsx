import Letters from '../components/Letters';
import List from '../components/List';


function SearchLetter() {
    return (
        <>
            <div className="bg_white">
                <div className="container">
                    <Letters />
                </div>
            </div>
            <div className="container">
                <List />
            </div>
        </>
    )
}

export default SearchLetter