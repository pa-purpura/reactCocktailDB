import Input from '../components/Input';
import List from '../components/List';
import '../assets/styles/colors.css';

function SearchName() {
    return (
        <div className="bg_yellow p-5">
            <div className="container ">
                <Input />
            </div>
            <div className="container">
                <List />
            </div>

        </div>
    )
}

export default SearchName