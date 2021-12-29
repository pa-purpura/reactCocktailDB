import List from '../components/List';
import Buttons from "../components/Buttons";
import Categories from "../components/Categories";

import '../assets/styles/colors.css';

function FilterCategories() {

    return (
        < >
            <div className="bg_white">
                <div className="container">
                    <Categories />
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

export default FilterCategories