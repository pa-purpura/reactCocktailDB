import { useContext, useState } from 'react';
import { SearchContext } from '../context/Search';
import api from '../util/api';

export default function useSerach() {

    const search = useContext(SearchContext)

    const [loading, setLoading] = useState(true)

    const searchByLetter = async (letter) => {
        setLoading(true)
        try {
            // console.log('i dati arrivano alla funzione', data)
            const res = await api.searchByLetter(letter)
            search.setCocktails(res.data)
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    return { searchByLetter }

}