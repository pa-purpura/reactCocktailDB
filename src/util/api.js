import axios from "axios";

const instance = axios.create({ baseURL: 'https://www.thecocktaildb.com/api' })

const api = {

    searchByLetter: (letter) => {
        return instance.get(`json/v1/1/search.php?f=${letter}`)
    },

    getDrink: (id) => {
        return instance.get(`json/v1/1/lookup.php?i=${id}`)
    }
}

export default api

// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007