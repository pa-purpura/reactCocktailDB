import Input from '../components/Input';
import List from '../components/List';
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
        </>

    )
}

export default SearchName