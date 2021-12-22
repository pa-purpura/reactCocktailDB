import { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../context/Search';
import Card from "./Card";

function List() {

    const context = useContext(SearchContext)

    const drinks = context.cocktails


    // console.log("primo list ", drinks)


    return (

        < div className='row mt-5' >
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




