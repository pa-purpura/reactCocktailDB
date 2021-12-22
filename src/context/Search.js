import { useState, createContext } from "react";


// import api from "../util/api"

export const SearchContext = createContext()

export default function SearchProvider({ children }) {
    const [letter, setLetter] = useState(null)
    const [name, setName] = useState(null)
    const [cocktail, setCocktail] = useState([])
    const [cocktails, setCocktails] = useState([])

    // console.log(name)

    return (
        <SearchContext.Provider value={{ cocktail, cocktails, name, letter, setLetter: setLetter, setName: setName, setCocktail: setCocktail, setCocktails: setCocktails }}>
            {children}
        </SearchContext.Provider>
    )

}
