import axios from 'axios'
import api from './api'



const apiKey = '2e5cb871604e17ebcf28b776c1864e0b'

export const getFilmsTrending = (page)=>{
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`

    return api.get(url)

}