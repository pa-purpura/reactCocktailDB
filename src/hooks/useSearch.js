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
            console.log(res.data.drinks)
            search.setCocktails(res.data.drinks)
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    const getDrink = async (id) => {
        setLoading(true)
        try {
            // console.log('i dati arrivano alla funzione', data)
            const res = await api.getDrink(id)
            // console.log('cosa arriva', res.data.drinks)
            search.setCocktail(res.data.drinks)
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    const searchByName = async (name) => {
        setLoading(true)
        try {
            // console.log('i dati arrivano alla funzione', data)
            const res = await api.searchByName(name)
            // console.log('cosa arriva', res.data.drinks)
            search.setCocktails(res.data.drinks)
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    const getCategories = async () => {
        setLoading(true)
        try {
            // console.log('i dati arrivano alla funzione', data)
            const res = await api.getCategories()
            // console.log('lista categorie', res.data.drinks)
            search.setCategories(res.data.drinks)
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    const filterByCategories = async (category) => {
        setLoading(true)
        try {
            // console.log('i dati arrivano alla funzione', data)
            const res = await api.filterByCategories(category)
            // console.log('lista categorie', res.data.drinks)
            search.setCocktails(res.data.drinks)
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }

    }

    return { searchByLetter, getDrink, searchByName, getCategories, filterByCategories }

}