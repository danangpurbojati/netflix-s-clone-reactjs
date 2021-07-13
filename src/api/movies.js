import axios from 'axios';
import { config } from '../config';

export const discoverMovies = async (page) => {
    return await axios.get(`${config.apiHost}/discover/movie`, {
        params: {
            api_key: `${config.apiKey}`,
            page
        }
    })
}

export const detailMovie = async (id) => {
    return await axios.get(`${config.apiHost}/movie/${id}`, {
        params: {
            api_key: `${config.apiKey}`,
            languange: 'en-US',
            append_to_response: 'videos,credits'
        }
    })
}

export const heroMovie = async () => {
    return await axios.get(`${config.apiHost}/movie/latest`, {
        params: {
            api_key: `${config.apiKey}`,
            languange: 'en-US',
            append_to_response: 'videos,credits,genres'
        }
    })
}

export const topRatedMovies = async () => {
    return await axios.get(`${config.apiHost}/movie/top_rated`, {
        params: {
            api_key: `${config.apiKey}`,
            languange: 'en-US',
        }
    })
}

export const popularMovies = async () => {
    return await axios.get(`${config.apiHost}/movie/popular`, {
        params: {
            api_key: `${config.apiKey}`,
            languange: 'en-US',
        }
    })
}