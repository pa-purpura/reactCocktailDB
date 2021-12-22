import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useSearch from '../hooks/useSearch';
import { useContext, useState } from 'react';
import { SearchContext } from '../context/Search';
import '../assets/styles/colors.css';

function Cocktail() {

    const { id } = useParams()
    const search = useSearch()
    const context = useContext(SearchContext)
    const drink = context.cocktail
    console.log(drink.strDrink)

    console.log('pronto ad essere renderizzato', drink)

    useEffect(() => {
        search.getDrink(id)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        drink.map(el => {
            return (
                <h4>cocktail details of id:{el.idDrink} and name: {el.strDrink} works!</h4>
            )
        })

    )
}

export default Cocktail