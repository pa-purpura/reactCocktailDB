import { useState, useEffect, createContext } from "react";


// import api from "../util/api"

export const SearchContext = createContext()

export default function SearchProvider({ children }) {
    const [letter, setLetter] = useState(null)
    const [cocktail, setCocktail] = useState(null)
    const [cocktails, setCocktails] = useState([])
    console.log(cocktails)

    // console.log(cocktails.drinks)

    // const drinks = cocktails.drinks

    // const nameses = drinks.map(drink => console.log(drink.strDrink))


    return (
        <SearchContext.Provider value={{ cocktail, cocktails, letter, setLetter: setLetter, setCocktail: setCocktail, setCocktails: setCocktails }}>
            {children}
        </SearchContext.Provider>
    )

}
