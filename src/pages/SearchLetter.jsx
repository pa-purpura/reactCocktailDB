import Letters from '../components/Letters';
import List from '../components/List';
import Buttons from "../components/Buttons";


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
            <div className="container">
                <Buttons />
            </div>
        </>
    )
}

export default SearchLetter