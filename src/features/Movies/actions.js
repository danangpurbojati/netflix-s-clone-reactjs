import { discoverMovies } from "../../api/movies";
import { NEXT_PAGE, SET_PAGE, SUCCESS_FETCH_MOVIES } from "./constants";

export const successFetchingMovies = (data, totalPages) => {
    return {
        type: SUCCESS_FETCH_MOVIES,
        data,
        totalPages
    }
}


export const fetchMovies = () => {
    return async (dispatch, getState) => {
        const currentPage = getState().movies.currentPage || 1;
        try {
            const { data: { results, total_pages } } = await discoverMovies(currentPage);
            // console.log(total_pages);
            dispatch(successFetchingMovies(results, total_pages));
        } catch (error) {
            console.log(error)   
        }
    }
}

export const setPage = (number = 1) => {
    return {
        type: SET_PAGE,
        currentPage: number
    }
}

export const goToNextPage = () => {
    return {
        type: NEXT_PAGE
    }
}