import Input from '../components/Input';
import List from '../components/List';
import Buttons from "../components/Buttons";

import '../assets/styles/colors.css';

function SearchName() {
    return (
        < >
            <div className="bg_white">
                <div className="container">
                    <Input />
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

export default SearchName