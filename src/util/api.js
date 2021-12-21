import axios from "axios";

const instance = axios.create({ baseURL: 'https://www.thecocktaildb.com/api' })

const api = {
    searchByLetter: (letter) => {
        return instance.get(`json/v1/1/search.php?f=${letter}`)
    }
}


export default api