import { NEXT_PAGE, SET_PAGE, SUCCESS_FETCH_MOVIES } from "./constants";

const initialState = {
    movies: [],
    currentPage: 1,
    totalPages: 1,
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case SUCCESS_FETCH_MOVIES: 
            return {
                ...state,
                movies: state.movies.concat(action.data),
                totalPages: action.totalPages
            }
        
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            } 

        default:
            return state;
    }
}

export default reducer;