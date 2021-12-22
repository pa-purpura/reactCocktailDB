import { useState, createContext } from "react";


// import api from "../util/api"

export const SearchContext = createContext()

export default function SearchProvider({ children }) {
    const [letter, setLetter] = useState(null)
    const [cocktail, setCocktail] = useState([])
    const [cocktails, setCocktails] = useState([])

    return (
        <SearchContext.Provider value={{ cocktail, cocktails, letter, setLetter: setLetter, setCocktail: setCocktail, setCocktails: setCocktails }}>
            {children}
        </SearchContext.Provider>
    )

}
