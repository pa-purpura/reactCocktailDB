import axios from "axios";

const instance = axios.create({ baseURL: 'https://www.thecocktaildb.com/api' })

const api = {

    searchByLetter: (letter) => {
        return instance.get(`json/v1/1/search.php?f=${letter}`)
    },

    getDrink: (id) => {
        return instance.get(`json/v1/1/lookup.php?i=${id}`)
    },

    searchByName: (name) => {
        return instance.get(`json/v1/1/search.php?s=${name}`)
    },

    getCategories: () => {
        return instance.get(`json/v1/1/list.php?c=list`)
    },

    filterByCategories: (category) => {
        return instance.get(`json/v1/1/filter.php?c=${category}`)
    }
}

export default api