import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useSearch from '../hooks/useSearch';
import { useContext } from 'react';
import { SearchContext } from '../context/Search';
import '../assets/styles/colors.css';
import Details from "../components/Details";
import Buttons from "../components/Buttons";

function Cocktail() {

    const { id } = useParams()
    const search = useSearch()
    const context = useContext(SearchContext)
    const drink = context.cocktail
    // console.log(drink.strDrink)

    // console.log('pronto ad essere renderizzato', drink)

    useEffect(() => {
        search.getDrink(id)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        drink.map(el => {
            return (
                <div className="container">
                    <div className="row m-2 ">
                        <Details props={el} />
                    </div>
                    <Buttons />
                </div>
            )
        })

    )
}

export default Cocktail

