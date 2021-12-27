import { useContext } from 'react';
import { SearchContext } from '../context/Search';
import Card from "./Card";

function List() {

    const context = useContext(SearchContext)

    const drinks = context.cocktails

    return (

        < div className='row m-5' style={{ minHeight: '58vh' }}>
            <div className="col-md-12 d-flex flex-wrap   justify-content-center">
                {
                    (drinks == undefined)
                        ? (<h4>No results</h4>)
                        : (drinks.map((drink, i) => {
                            return <Card
                                id={drink.idDrink}
                                data={drink}
                            />
                        }))
                }
            </div>
        </div >
    )
}

export default List




